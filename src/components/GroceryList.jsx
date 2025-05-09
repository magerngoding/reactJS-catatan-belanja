import { useState } from "react";
import Item from "./Item";

export default function GroceryList({ items, onDeleteItem, onToogleItem, onClearItems }) {

    const [sortBy, setSortBy] = useState('input');

    let sortedItems;

    switch (sortBy) {
        case 'name':
            // urut berdasarkan A-Z = a.name.localeCompare(b.name)
            sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
            break;

        case 'checked':
            // urut berdasarkan ceklis = a.checked - b.checked
            sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
            break;

        default:
            // default input
            sortedItems = items; // default input
            break;
    }

    return (
        <>
            <div className="list">
                <ul>
                    {sortedItems.map(item => (
                        <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToogleItem={onToogleItem} /> // kirim props
                    ))}
                </ul>
            </div>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Urutkan berdasarkan urutan input</option>
                    <option value="name">Urutkan berdasarkan nama barang</option>
                    <option value="checked">Urutkan berdasarkan ceklis</option>
                </select>
                <button onClick={onClearItems}>Bersihkan Daftar</button>
            </div>
        </>
    )
}
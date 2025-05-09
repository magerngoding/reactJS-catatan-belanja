export default function Item({ item, onDeleteItem, onToogleItem }) {
    return (
        <>
            <li key={item.id}>
                <input type="checkbox" checked={item.checked} onChange={() => onToogleItem(item.id)} />
                <span style={item.checked ? { textDecoration: 'line-through' } : {}}>
                    {item.quantity} {item.name}
                </span>
                <button onClick={() => onDeleteItem(item.id)}>&times;</button>
                {/* pakai arrow function agar dijalankan ketika diklik */}
            </li>
        </>
    )
}
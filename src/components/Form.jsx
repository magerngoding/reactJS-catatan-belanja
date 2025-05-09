import { useState } from "react"; // hook

export default function Form({ onAddItem }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault(); // fungi dimatikan agar diURL tidak ada tanda (?)

        // Guard Clause = jika nama kosong keluar dari function
        if (!name) return; // !name not namae / false = kosong

        const newItem = {
            name,
            quantity,
            checked: false,
            id: Date.now()
        };
        onAddItem(newItem);

        console.log(newItem);

        setName(''); // setelah diadd balik ke kosong
        setQuantity(1); // setelah diadd balik ke 1
    }

    const quantityNum = [...Array(20)].map((_, i) => (
        <option value={i + 1} key={i + 1}>
            {i + 1}
        </option>
    ));

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>Hari ini belanja apa kita?</h3>
            <div>
                <select value={quantity}
                    // set quantity dipaksa ke NUMBER()
                    onChange={(e) => setQuantity(Number(e.target.value))}>
                    {quantityNum}
                </select>

                <input type="text" placeholder="nama barang..." value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>

            <button>Tambah</button>
        </form>
    );
}
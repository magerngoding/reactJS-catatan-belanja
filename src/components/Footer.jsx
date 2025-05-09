export default function Footer({ items }) {
    if (items.length === 0) {
        return <footer className="stats">Daftar belanja masih kosong!
        </footer>
    }

    const totalItems = items.length;
    const checkedItems = items.filter((item) => item.checked).length;
    const percentage = Math.round((checkedItems / totalItems) * 100);

    return <footer className="stats">
        <div>
            <p> Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentage}%)</p>
            <br />
            <h6> By WPU</h6>
        </div>
    </footer>
}
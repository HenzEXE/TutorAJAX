// Menjalankan AJAX untuk mendapatkan data dari file JSON
document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json') // Mengambil data dari file JSON
        .then(response => response.json()) // Mengubah respons menjadi format JSON
        .then(data => {
            const tableBody = document.getElementById('user-table'); // Mendapatkan elemen <tbody>
            let tableContent = '';
            
            // Loop untuk setiap pengguna di dalam data JSON
            data.forEach((user, index) => {
                // Menambahkan baris baru ke tabel untuk setiap pengguna
                tableContent += `
                <tr>
                    <td>
                        <strong>${user.name}</strong><br>
                        ${user.address}<br>
                        <a href="mailto:${user.email}">${user.email}</a><br>
                        ${user.phone}
                    </td>
                    <td>
                        <button class="btn btn-info">Detail</button>
                        <button class="btn btn-warning">Edit</button>
                        <button class="btn btn-danger">Hapus</button>
                    </td>
                </tr>`;
            });

            // Menambahkan semua konten baris ke dalam <tbody>
            tableBody.innerHTML = tableContent;
        })
        .catch(error => console.error('Gagal mengambil data:', error)); // Menampilkan pesan error jika gagal
});

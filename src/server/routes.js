const routes = [
    // route menyimpan buku
    {
        method: 'POST',
        path: '/books',
    },
    // route menampilkan seluruh buku
    {
        method: 'GET',
        path: '/books',
    },
    // route menampilkan detail buku
    {
        method: 'GET',
        path: '/books/{bookid}',
    },
    // route mengubah data buku
    {
        method: 'PUT',
        path: '/books/{bookid}',
    },
    // route menghapus data buku
    {
        method: 'DELETE',
        path: '/books/{bookid}',
    },
];

module.exports = routes;

const { createBookHandler } = require('../handlers/books');

const routes = [
    // route menyimpan buku
    {
        method: 'POST',
        path: '/books',
        handler: createBookHandler,
    },
    // route menampilkan seluruh buku
    {
        method: 'GET',
        path: '/books',
        handler: (req, h) => '',
    },
    // route menampilkan detail buku
    {
        method: 'GET',
        path: '/books/{bookid}',
        handler: (req, h) => '',
    },
    // route mengubah data buku
    {
        method: 'PUT',
        path: '/books/{bookid}',
        handler: (req, h) => '',
    },
    // route menghapus data buku
    {
        method: 'DELETE',
        path: '/books/{bookid}',
        handler: (req, h) => '',
    },
];

module.exports = routes;

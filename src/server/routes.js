const {
    createBookHandler,
    getAllBooksHandler,
    getByIdBookHandler,
    updateBookHandler,
    deleteBookHandler,
} = require('../handlers/books');

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
        handler: getAllBooksHandler,
    },
    // route menampilkan detail buku
    {
        method: 'GET',
        path: '/books/{bookid}',
        handler: getByIdBookHandler,
    },
    // route mengubah data buku
    {
        method: 'PUT',
        path: '/books/{bookid}',
        handler: updateBookHandler,
    },
    // route menghapus data buku
    {
        method: 'DELETE',
        path: '/books/{bookid}',
        handler: deleteBookHandler,
    },
];

module.exports = routes;

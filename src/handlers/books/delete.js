const books = require('../../db/books');
const { responseError, responseSuccess } = require('../../helpers/response');

module.exports = (req, h) => {
    try {
        const { bookid } = req.params;
        const index = books.findIndex((book) => book.id === bookid);
        if (index === -1) {
            return h
                .response(
                    responseError('Buku gagal dihapus. Id tidak ditemukan'),
                )
                .code(404);
        }
        books.splice(index, 1);
        return h.response(responseSuccess('Buku berhasil dihapus')).code(200);
    } catch (error) {
        return h
            .response(responseError('Buku gagal dihapus', 'error'))
            .code(500);
    }
};

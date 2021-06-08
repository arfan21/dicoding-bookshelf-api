const books = require('../../db/books');
const { responseError, responseSuccess } = require('../../helpers/response');

module.exports = (req, h) => {
    try {
        const { bookid } = req.params;
        const data = books.filter((book) => book.id === bookid)[0];
        if (!data) {
            return h.response(responseError('Buku tidak ditemukan')).code(404);
        }
        return h
            .response(
                responseSuccess('', {
                    book: data,
                }),
            )
            .code(200);
    } catch (error) {
        return h
            .response(responseError('gagal mendapatkan seluruh buku', 'error'))
            .code(500);
    }
};

const books = require('../../db/books');
const { responseError, responseSuccess } = require('../../helpers/response');

module.exports = (req, h) => {
    try {
        const responseBooks = books.map((data) => ({
            id: data.id,
            name: data.name,
            publisher: data.publisher,
        }));
        return h
            .response(
                responseSuccess('', {
                    books: responseBooks,
                }),
            )
            .code(200);
    } catch (error) {
        return h
            .response(responseError('gagal mendapatkan seluruh buku', 'error'))
            .code(500);
    }
};

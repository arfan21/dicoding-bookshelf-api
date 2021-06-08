const books = require('../../db/books');
const { responseError, responseSuccess } = require('../../helpers/response');

module.exports = (req, h) => {
    try {
        const { bookid } = req.params;
        const {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
        } = req.payload;

        const index = books.findIndex((book) => book.id === bookid);
        if (index === -1) {
            return h
                .response(
                    responseError('Gagal memperbarui buku. Id tidak ditemukan'),
                )
                .code(404);
        }

        if (!name) {
            return h
                .response(
                    responseError(
                        'Gagal memperbarui buku. Mohon isi nama buku',
                    ),
                )
                .code(400);
        }

        if (readPage > pageCount) {
            return h
                .response(
                    responseError(
                        'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
                    ),
                )
                .code(400);
        }

        const finished = pageCount === readPage;
        const updatedAt = new Date().toISOString();

        books[index] = {
            ...books[index],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            finished,
            reading,
            updatedAt,
        };

        return h
            .response(responseSuccess('Buku berhasil diperbarui'))
            .code(200);
    } catch (error) {
        return h
            .response(responseError('Buku gagal diperbarui', 'error'))
            .code(500);
    }
};

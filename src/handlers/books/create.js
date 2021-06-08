const { nanoid } = require('nanoid');
const books = require('../../db/books');
const { responseError, responseSuccess } = require('../../helpers/response');

module.exports = (req, h) => {
    try {
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

        if (!name) {
            return h
                .response(
                    responseError(
                        'Gagal menambahkan buku. Mohon isi nama buku',
                    ),
                )
                .code(400);
        }

        if (readPage > pageCount) {
            return h
                .response(
                    responseError(
                        'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
                    ),
                )
                .code(400);
        }

        const id = nanoid(16);
        const finished = pageCount === readPage;
        const insertedAt = new Date().toISOString();
        const updatedAt = insertedAt;

        const newBook = {
            id,
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            finished,
            reading,
            insertedAt,
            updatedAt,
        };

        books.push(newBook);

        return h
            .response(
                responseSuccess('Buku berhasil ditambahkan', {
                    bookId: newBook.id,
                }),
            )
            .code(201);
    } catch (error) {
        return h
            .response(responseError('Buku gagal ditambahkan', 'error'))
            .code(500);
    }
};

const books = require('../../db/books');
const { responseError, responseSuccess } = require('../../helpers/response');

module.exports = (req, h) => {
    try {
        const { name, reading, finished } = req.query;

        if (name) {
            const responseBooksByName = books
                .filter((data) => data.name.toLowerCase().includes(name.toLowerCase()))
                .map((data) => ({
                    id: data.id,
                    name: data.name,
                    publisher: data.publisher,
                }));

            return h
                .response(
                    responseSuccess('', {
                        books: responseBooksByName,
                    }),
                )
                .code(200);
        }

        if (reading) {
            const readingBool = Boolean(Number(reading));
            const responseBooksByReading = books
                .filter((data) => data.reading === readingBool)
                .map((data) => ({
                    id: data.id,
                    name: data.name,
                    publisher: data.publisher,
                }));

            return h
                .response(
                    responseSuccess('', {
                        books: responseBooksByReading,
                    }),
                )
                .code(200);
        }

        if (finished) {
            const finishedBool = Boolean(Number(finished));
            const responseBooksByReading = books
                .filter((data) => data.finished === finishedBool)
                .map((data) => ({
                    id: data.id,
                    name: data.name,
                    publisher: data.publisher,
                }));

            return h
                .response(
                    responseSuccess('', {
                        books: responseBooksByReading,
                    }),
                )
                .code(200);
        }

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

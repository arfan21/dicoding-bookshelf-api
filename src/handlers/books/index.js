const createBookHandler = require('./create');
const getAllBooksHandler = require('./getAll');
const getByIdBookHandler = require('./getById');
const updateBookHandler = require('./update');
const deleteBookHandler = require('./delete');

module.exports = {
    createBookHandler,
    getAllBooksHandler,
    getByIdBookHandler,
    updateBookHandler,
    deleteBookHandler,
};

const cleanObj = require('./cleanObj');

const responseSuccess = (message, data) =>
    cleanObj({
        status: 'success',
        message,
        data,
    });

const responseError = (message, status = 'fail') => ({
    status,
    message,
});

module.exports = { responseSuccess, responseError };

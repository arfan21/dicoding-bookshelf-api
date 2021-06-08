const responseSuccess = (message, data) => ({
    status: 'success',
    message,
    data,
});

const responseError = (message, status = 'fail') => ({
    status,
    message,
});

module.exports = { responseSuccess, responseError };

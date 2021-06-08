const Hapi = require('@hapi/hapi');

const httpServer = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 5000,
        host: 'localhost',
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

module.exports = httpServer;

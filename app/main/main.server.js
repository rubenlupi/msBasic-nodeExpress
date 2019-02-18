'use strict';

const server = () => {
    const main = (req, res, next) => {
        res.send('Main working....');
    }

    return {
        main
    }
};

module.exports = server;
'use strict';

module.exports = (app) => {
    let mainServer = require('../../app/main/main.server')();

    app.route('/main').post(
        mainServer.main
    );
};
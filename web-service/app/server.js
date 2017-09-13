var express = require('express');
var bole = require('bole');
var config = require('../app/config.js');
var app = require('../app/route.js');

var logger = bole('server');
bole.output({level: 'debug', stream: process.stdout});

logger.info('server process starting');
app.listen(config.server.port, config.server.host, function (error) {
    if (error) {
        logger.error('Unable to listen for connections', error);
        process.exit(10)
    }
    logger.info('express is listening on http://' + config.server.host + ':' + config.server.port)
});
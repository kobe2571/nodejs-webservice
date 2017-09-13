var express = require('express');
var app = express();

app.use('/api', require('../app/controllers/users_controller.js'));

module.exports = app;
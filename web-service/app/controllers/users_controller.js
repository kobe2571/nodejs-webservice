var router = require('express').Router();
var logger = require('bole')('controllers/user_controller');
var user_service = require('../services/user_service.js');

function getUsers(req, res) {
    logger.info('log in get users function');
    res.send(user_service.getUserService());
}

router.get('/users/get', getUsers);

module.exports = router;
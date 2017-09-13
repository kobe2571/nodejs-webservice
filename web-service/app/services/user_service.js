var user_repository = require('../repositories/user_repository.js');

function transformUserData(userData) {
    return JSON.stringify(userData);
}

module.exports = {
    getUserService: function getUserService() {
        return transformUserData(user_repository.getUserData());
    }
};
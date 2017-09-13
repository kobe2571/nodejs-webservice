function getMockUserData() {
    var User = {
        name: "Test Name",
        age: "20",
        address: "New York"
    };
    return User;
}

module.exports = {
    getUserData: function getUserData() {
        return getMockUserData();
    }
};
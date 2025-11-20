// services/authService.js

// Hardcoded user
const user = {
    username: "admin",
    password: "1234"
};

// Validate login
exports.validateUser = (username, password) => {
    return username === user.username && password === user.password;
};

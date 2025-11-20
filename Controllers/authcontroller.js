// controllers/authController.js

const authService = require("../services/authService");

exports.login = (req, res) => {
    const { username, password } = req.body;

    const isValid = authService.validateUser(username, password);

    if (isValid) {
        return res.json({
            success: true,
            message: "Login successful!"
        });
    }

    return res.json({
        success: false,
        message: "Invalid credentials"
    });
};

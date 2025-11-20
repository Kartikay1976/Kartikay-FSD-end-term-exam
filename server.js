// server.js

const express = require("express");
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Hardcoded user
const user = {
    username: "admin",
    password: "1234"
};

// POST /login route
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Check credentials
    if (username === user.username && password === user.password) {
        return res.json({
            success: true,
            message: "Login successful!"
        });
    }

    // If incorrect
    return res.json({
        success: false,
        message: "Invalid credentials"
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

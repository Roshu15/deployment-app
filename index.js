const express = require("express");
const app = express();

// Use environment variable for port
const PORT = process.env.PORT || 3000;

// Route 1
app.get("/", (req, res) => {
    res.send("Application Deployed Successfully");
});

// Route 2
app.get("/status", (req, res) => {
    res.json({
        status: "running",
        environment: "production"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
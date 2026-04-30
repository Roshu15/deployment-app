const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";

// Logging (prints every request in terminal)
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// Home
app.get("/", (req, res) => {
    res.send("Application Deployed Successfully");
});

// Status
app.get("/status", (req, res) => {
    res.json({
        status: "running",
        environment: env
    });
});

//  NEW: Info route
app.get("/info", (req, res) => {
    res.json({
        name: "Deployment App",
        version: "1.0.0",
        author: "Roshani Chavan"
    });
});

// NEW: 404 error
app.use((req, res) => {
    res.status(404).send("Route not found");
});

// Start server
app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
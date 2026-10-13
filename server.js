const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/libraryDB")
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.log(error.message));

// Routes
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/members", require("./routes/memberRoutes"));
app.use("/api/issues", require("./routes/issueRoutes"));

// Home route
app.get("/", (req, res) => {
    res.send("Library Management System API is Running");
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
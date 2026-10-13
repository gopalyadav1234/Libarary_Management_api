const express = require("express");
const router = express.Router();

const {
    issueBook,
    getIssues,
    returnBook
} = require("../controllers/issueController.js");

// Issue a book
router.post("/", issueBook);

// Get all issued books
router.get("/", getIssues);

// Return a book
router.put("/return/:id", returnBook);

module.exports = router;
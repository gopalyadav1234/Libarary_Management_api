const express = require("express");
const router = express.Router();

const {
    addBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook
} = require("../controllers/bookController.js");

// Add book
router.post("/", addBook);

// Get all books, search, filter, pagination
router.get("/", getBooks);

// Get single book
router.get("/:id", getBook);

// Update book
router.put("/:id", updateBook);

// Delete book
router.delete("/:id", deleteBook);

module.exports = router;
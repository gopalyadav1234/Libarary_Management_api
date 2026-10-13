const Issue = require("../models/Issue.js");
const Book = require("../models/Book.js");
const Member = require("../models/Member.js");

// Issue book
const issueBook = async (req, res) => {
    try {
        const { bookId, memberId } = req.body;

        const book = await Book.findById(bookId);
        const member = await Member.findById(memberId);

        if (!book || !member) {
            return res.status(404).json({
                message: "Book or member not found"
            });
        }

        if (book.available <= 0) {
            return res.status(400).json({
                message: "Book is not available"
            });
        }

        const issue = await Issue.create({
            book: bookId,
            member: memberId
        });

        book.available -= 1;
        await book.save();

        res.status(201).json({
            message: "Book issued successfully",
            issue
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all issued books
const getIssues = async (req, res) => {
    try {
        const issues = await Issue.find()
            .populate("book")
            .populate("member");

        res.json(issues);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Return book
const returnBook = async (req, res) => {
    try {
        const issue = await Issue.findById(req.params.id);

        if (!issue) {
            return res.status(404).json({
                message: "Issue record not found"
            });
        }

        if (issue.status === "Returned") {
            return res.status(400).json({
                message: "Book already returned"
            });
        }

        const book = await Book.findById(issue.book);

        if (book) {
            book.available += 1;
            await book.save();
        }

        issue.status = "Returned";
        issue.returnDate = new Date();

        await issue.save();

        res.json({
            message: "Book returned successfully",
            issue
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    issueBook,
    getIssues,
    returnBook
};
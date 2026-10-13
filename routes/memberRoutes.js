const express = require("express");
const router = express.Router();

const {
    addMember,
    getMembers,
    getMember,
    updateMember,
    deleteMember
} = require("../controllers/memberController.js");

// Add member
router.post("/", addMember);

// Get all members
router.get("/", getMembers);

// Get single member
router.get("/:id", getMember);

// Update member
router.put("/:id", updateMember);

// Delete member
router.delete("/:id", deleteMember);

module.exports = router;
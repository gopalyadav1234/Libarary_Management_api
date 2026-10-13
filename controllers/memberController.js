
const Member = require("../models/Member.js");

// Add member
exports.addMember = async (req, res) => {
    try {
        const member = await Member.create(req.body);
        res.status(201).json(member);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all members
exports.getMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single member
exports.getMember = async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);

        if (!member) {
            return res.status(404).json({
                message: "Member not found"
            });
        }

        res.json(member);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// Update member
exports.updateMember = async (req, res) => {
    try {
        const member = await Member.findByIdAndUpdate(
            req.params.id, req.body, { new: true }
        );

        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }

        res.json(member);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete member
exports.deleteMember = async (req, res) => {
    try {
        const member = await Member.findByIdAndDelete(req.params.id);

        if (!member) {
            return res.status(404).json({ message: "Member not found" });
        }

        res.json({ message: "Member deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
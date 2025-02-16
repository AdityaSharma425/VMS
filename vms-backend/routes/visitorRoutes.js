const express = require("express");
const Visitor = require("../models/Visitor");
const router = express.Router();

// ✅ Register Visitor
router.post("/", async (req, res) => {
    try {
        const newVisitor = new Visitor(req.body);
        await newVisitor.save();
        res.status(201).json({ message: "Visitor registered successfully!", visitor: newVisitor });
    } catch (error) {
        res.status(500).json({ message: "Server error. Please try again." });
    }
});

// ✅ Get All Visitors
router.get("/", async (req, res) => {
    try {
        const visitors = await Visitor.find().sort({ date: -1 });
        res.status(200).json(visitors);
    } catch (error) {
        res.status(500).json({ message: "Server error. Please try again." });
    }
});

// ✅ Get a Single Visitor by ID
router.get("/:id", async (req, res) => {
    try {
        const visitor = await Visitor.findById(req.params.id);
        if (!visitor) return res.status(404).json({ message: "Visitor not found" });
        res.status(200).json(visitor);
    } catch (error) {
        res.status(500).json({ message: "Server error. Please try again." });
    }
});

// ✅ Delete a Visitor
router.delete("/:id", async (req, res) => {
    try {
        const visitor = await Visitor.findByIdAndDelete(req.params.id);
        if (!visitor) return res.status(404).json({ message: "Visitor not found" });
        res.status(200).json({ message: "Visitor deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error. Please try again." });
    }
});

module.exports = router;

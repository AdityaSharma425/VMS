const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    purpose: { type: String, required: true },
    host: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

const Visitor = mongoose.model("Visitor", visitorSchema);
module.exports = Visitor;

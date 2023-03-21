const mongoose = require("mongoose");

const Prompt = new mongoose.Schema({
    author: { type: String, required: true },
    value: { type: String, required: true },
    img: { type: String, required: true },
    likes: { type: Number, default: 0 },
    downloads: { type: Number, default: 0 },
    timeStamp: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Prompt", Prompt);
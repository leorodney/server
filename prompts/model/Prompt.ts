import mongoose from "mongoose";

const Prompt = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    value: { type: String, required: true },
    img: { type: String, required: true },
    likes: { type: Number, default: 0 },
    downloads: { type: Number, default: 0 },
},{ 
    timestamps: true
});

export default mongoose.model("Prompt", Prompt);
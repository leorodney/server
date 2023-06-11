import dotenv from 'dotenv';
dotenv.config();
import { Schema, model } from 'mongoose';

const User = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: process.env.CLOUDINARY_DEFAULT_PROFILE_IMAGE },
}, {
    timestamps: true
});

export default model('User', User);
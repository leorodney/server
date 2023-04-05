import mongoose from "mongoose";

export type SessionUser = {
    uid: mongoose.Types.ObjectId;
    username: string;
    authenticated: boolean;
}
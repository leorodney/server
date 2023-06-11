import { Types } from "mongoose";

declare global {
    namespace Express {
        interface SessionData {
            user: SessionUser;
        }
    }
};

export type SessionUser = {
    authenticated: boolean;
    uid: Types.ObjectId;
    name: string;
    username: string;
    email: string;
    profilePicture: string;
    joined: Date;
};
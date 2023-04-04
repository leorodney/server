import mongoose from "mongoose";

export {};

declare global {
  namespace Express {
    interface Request {
      session: {
        user: {
            authenticated: boolean;
            username: string;
            uid: mongoose.Types.ObjectId;
        }
      }
    }
  }
}

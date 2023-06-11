// trigger a logout
import { Request, Response } from 'express';

export const logoutRoute = (req: Request, res: Response)=>{
    // destroy the session
    req.session.destroy((error)=>{
        if(error){
            console.log(error);
            return res.status(500).json({message: 'unable to Log out', error, ok: false})
        }
        // clear the cookie
        res.clearCookie('sid');
        return res.status(200).json({message: 'Logged out', error: "", ok: true});
    });
};
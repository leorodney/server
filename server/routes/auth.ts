// auth route that will check if the user is authenticated
import { Request, Response } from 'express';

export const authRoute = (req: Request, res: Response)=>{
    try{
        if(!req.session.user?.authenticated){
            return res.status(401).json({error: 'Not authenticated', ok: false});
        }
        const { username, uid } = req.session.user;
        return res.status(200).json({user: { uid, username }, message: 'Already logged in', error: "", ok: true});
    }
    catch(error){
        console.log(error);
        res.status(500).send();
    }
};


// auth route that will check if the user is authenticated
import { Request, Response } from 'express';
/**
 * **Athorization Route** to check if the user is authenticated or not from `request cookies`
 * by checking the session object and return the `user object` if authenticated
 */
export const authorizationRoute = (req: Request, res: Response)=>{
    try{
        if(!req.session.user?.authenticated){
            return res.status(401).json({error: 'Not authenticated', ok: false});
        }
        return res.status(200).json({user: req.session.user, message: 'Already logged in', error: "", ok: true});
    }
    catch(error){
        console.error(error);
        res.status(500).send();
    }
};


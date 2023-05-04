import { Request, Response } from 'express';
import User from '../model/User';
import bcrypt from 'bcrypt';

export const loginRoute = async (req: Request, res: Response)=>{
    const {emailorusername, password} = req.body;
    
    console.log({SID: req.sessionID})
    try{

        if(req.session.user?.authenticated){
            const { username, uid } = req.session.user;
            return res.status(200).json({user: { uid, username }, message: 'Already logged in', error: "", ok: true});
        }

        const user = await User.findOne({$or: [{username: { $eq: emailorusername } }, {email: { $eq: emailorusername } }]});        
        if(!user || !await bcrypt.compare(password, user.password)){ 
            // return res.status(404).json({error: 'No user with this Email|Username', ok: false}); 
            return res.status(401).json({error: 'Invalid password or Email|Username', ok: false});
        }

        req.session.user = {
            authenticated: true,
            username: user.username,
            uid: user._id
        };
        
        return res.status(200).json({user: { uid: user._id, username: user.username }, message: 'Login successful', ok: true});
    }
    catch(error){
        console.log(error);
        res.status(500).send();
    }
};

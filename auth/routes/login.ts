import { Request, Response } from 'express';
import User from '../model/User';
import bcrypt from 'bcrypt';

export const loginRoute = async (req: Request, res: Response)=>{
    const {emailorusername, password} = req.body;
    
    try{

        if(req.session.user?.authenticated){
            return res.status(200).json({user: req.session.user, message: 'Already logged in', error: "", ok: true});
        }

        const user = await User.findOne({$or: [{username: { $eq: emailorusername } }, {email: { $eq: emailorusername } }]});        
        if(!user || !await bcrypt.compare(password, user.password)){ 
            return res.status(401).json({error: 'Invalid password or Email|Username', ok: false});
        }

        req.session.user = {
            authenticated: true,
            uid: user._id,
            name: user.firstname + " " + user.lastname,
            username: user.username,
            email: user.email,
            profilePicture: user.profilePicture,
            joined: user.createdAt
        };
        
        return res.status(200).json({user: req.session.user, message: 'Login successful', ok: true});
    }
    catch(error){
        console.error(error);
        res.status(500).send();
    }
};

import { Request, Response } from 'express';
import User from '../model/User';
import bcrypt from 'bcrypt';

export const registerRoute = async (req: Request, res: Response)=>{
    const {firstname, lastname, email, username, password} = req.body;

    try{
        if(await User.findOne({email: { $eq: email }})){
            return res.status(409).json({error: `User with email: ${email}, already exists`, ok: false});
        }
        if(await User.findOne({username: { $eq: username }})){
            return res.status(409).json({error: `User with username: ${username}, already exists`, ok: false});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({firstname, lastname, email, username, password: hashedPassword});

        req.session.user = {
            authenticated: true,
            username: user.username,
            uid: user._id
        };

        user.save();
        return res.status(201).json({user: { uid: user._id, username: user.username }, message: 'User created successfully', ok: true});
    }
    catch(error){
        console.log(error);
        res.status(500).send();
    }
};

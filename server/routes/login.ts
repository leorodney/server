import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';

export const loginRoute = async (req: Request, res: Response)=>{
    const {usernameOrEmail, password} = req.body;
    try{
        const user = await User.findOne({$or: [{username: { $eq: usernameOrEmail } }, {email: { $eq: usernameOrEmail } }]});        
        if(!user){ 
            return res.status(404).json({message: 'User not found'}); 
        }
        if(!await bcrypt.compare(password, user.password)){
            return res.status(401).json({message: 'Invalid password or Email/Username'});
        }
        res.status(200).json({message: 'Login successful'});
    }
    catch(error){
        console.log(error);
        res.status(500).send();
    }
};

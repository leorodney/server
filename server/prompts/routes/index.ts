import { Request, Response } from 'express';
// mongodb models
import Prompt from '../model/Prompt';

export const communityRoute = async (req: Request, res: Response)=>{
    try{
        const communityShowcases = await Prompt.find({});
        res.status(200).json(communityShowcases);
    }
    catch(error){
        console.log(error);
        res.status(500).send();
    }
}
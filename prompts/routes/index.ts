import { Request, Response } from 'express';
// mongodb models
import Prompt from '../model/Prompt';

export const communityRoute = async (req: Request, res: Response)=>{
    try{
        const communityShowcases = await Prompt.find({});
        res.status(200).json(communityShowcases);
    }
    catch(error){
        console.error(error);
        res.status(500).send();
    }
}

export const userPromptsRoute = async (req: Request, res: Response)=>{
    try{
        // finding the user prompts using the prompt author or the user uid,
        // it should be in this order: author, uid; to avoid the error:
        //CastError: Cast to ObjectId failed for value "whybe" (type string) at path "uid" for model "Prompt"
        console.log(req.session?.user);
        const userPrompts = await Prompt.find({ author: { $eq: req.params.uid } });
        // calculate the total downloads/likes user prompts reached
        let totalDownloads = userPrompts.reduce((accumulator, prompt) => accumulator + prompt.downloads, 0);
        let totalLikes = userPrompts.reduce((accumulator, prompt) => accumulator + prompt.likes, 0);
        res.status(200).json({prompts: userPrompts, totalDownloads, totalLikes});

    } catch(error){
        console.error(error);
        res.status(500).send();
    };
}
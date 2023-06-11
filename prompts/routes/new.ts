import { Request, Response } from 'express';
// axios
import axios from 'axios';
// load .env variables
import dotenv from 'dotenv';
dotenv.config();
// cloudinary
import { v2 as cloudinary } from 'cloudinary';
// mongodb models
import Prompt from '../model/Prompt';
// cloudinary config
import { cloudinaryConfig } from '../configs';

// cloudinary config
cloudinary.config(cloudinaryConfig);

export const promptRoute = async (req: Request, res: Response)=>{
    const { value, img } = req.body;
    try{
        // verfy user is authenticated from auth microservice using axios
        const { data } = await axios.get(`${process.env.AUTH_SERVICE_URL}`, { headers: { cookie: req.headers.cookie } });
        if(!data.user) return res.status(401).json({error: 'Not authenticated', ok: false});

        const uploadResponse = await cloudinary.uploader.upload(img, { folder: process.env.CLOUDINARY_FOLDER as string });
        const newPrompt = await Prompt.create({ author: data.user.uid, value, img: uploadResponse.secure_url });
        res.status(201).json(newPrompt);
    }
    catch(error){
        console.error(error);
        res.status(500).send();
    }
};


/**
 * update the like of a prompt
 */
export const likePromptRoute = async (req: Request, res: Response)=>{
    const { id, type }: { id: string, type: "like" | "unlike" } = req.body;
    try{
        // verfy user is authenticated from auth microservice using axios
        const { data } = await axios.get(`${process.env.AUTH_SERVICE_URL}`, { headers: { cookie: req.headers.cookie } });
        if(!data.user) return res.status(401).json({error: 'Not authenticated', ok: false}); 

        const prompt = await Prompt.findById(id);
        
        if(!prompt) return res.status(404).json({error: 'Prompt not found', ok: false});

        // increment the like count of the prompt
        type == "like" ? prompt.likes += 1 : prompt.likes -= 1 ;
        prompt.likes < 0 ? prompt.likes = 0 : prompt.likes; 
        await prompt.save();
        res.status(200).json(prompt);

    } catch(error) {
        console.error(error);
        res.status(500).send();
    }
}

/**
 * update the download of a prompt
 */
export const downloadPromptRoute = async (req: Request, res: Response)=>{
    const { id } = req.body;
    try{
        // verfy user is authenticated from auth microservice using axios
        const { data } = await axios.get(`${process.env.AUTH_SERVICE_URL}`, { headers: { cookie: req.headers.cookie } });
        if(!data.user) return res.status(401).json({error: 'Not authenticated', ok: false});

        const prompt = await Prompt.findById(id);
        
        if(!prompt) return res.status(404).json({error: 'Prompt not found', ok: false});

        // increment the download count of the prompt
        prompt.downloads += 1;
        await prompt.save();
        res.status(200).json(prompt);

    } catch(error) {
        console.error(error);
        res.status(500).send();
    }
}

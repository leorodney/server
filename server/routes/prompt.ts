import { Request, Response } from 'express';
import dotenv from 'dotenv';
// cloudinary
import { v2 as cloudinary } from 'cloudinary';
// mongodb models
import Prompt from '../models/Prompt';
// load .env variables
dotenv.config();

// cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
    api_key: process.env.CLOUDINARY_API_KEY as string,
    api_secret: process.env.CLOUDINARY_API_SECRET as string
});

export const promptRoute = async (req: Request, res: Response)=>{
    const { author, value, img } = req.body;
    try{
        const uploadResponse = await cloudinary.uploader.upload(img, { folder: process.env.CLOUDINARY_FOLDER as string });
        const newPrompt = await Prompt.create({ author, value, img: uploadResponse.secure_url });
        res.status(200).json(newPrompt);
    }
    catch(error){
        console.log(error);
        res.status(500).send();
    }
};


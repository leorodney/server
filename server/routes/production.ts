import { Request, Response } from 'express';
import dotenv from 'dotenv';
// openai dall-e model
import { OpenAIApi, Configuration } from 'openai';
// load .env variables
dotenv.config();

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

export const productionRoute = async (req: Request, res: Response)=>{
    const { prompt } = req.body;
    try{
        console.log("\t[ LEORODNEY ]: ", prompt);
        const dalleResponse = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        res.status(200).json({img: dalleResponse.data.data[0].b64_json});
    }catch(error){
        console.log(error);
        res.status(500).send();
    }
};

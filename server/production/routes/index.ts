import { Request, Response } from 'express';
// load .env variables
import dotenv from 'dotenv';
dotenv.config();
// openai dall-e model
import { OpenAIApi } from 'openai';
// openai config
import { openaiConfig } from '../configs';

const openai = new OpenAIApi(openaiConfig);

/**
 * Generate `image` from prompt using the `openai` api and the **`dall-e`** model
 * @param req 
 * @param res 
 */
export const productionRoute = async (req: Request, res: Response)=>{
    const { prompt } = req.body;
    try{
        console.log("\t[ LEORODNEY ]: ", prompt);
        // sending generated image to the client using the openai api and the dall-e model
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

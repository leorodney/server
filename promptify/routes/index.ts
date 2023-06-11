// surprise me route
import "@handy.js/handy";
import { Request, Response } from 'express';
import dotenv from 'dotenv';
// openai dall-e model
import { OpenAIApi } from 'openai';
// openai config
import { openaiConfig, surpriseMePromptConfig } from '../configs';
// load .env variables
dotenv.config();

const GPT = new OpenAIApi(openaiConfig);

/**
 * Generate `Prompt` as `Suprise Me Prompt` using the `openai` api and the **`gpt-3`** model
 */
export const surprisemeRoute = async (req: Request, res: Response)=>{
    try{
        // sending generated prompts to the client using the openai api and the gpt-3 model
        const GPTResponse = await GPT.createCompletion(surpriseMePromptConfig);
        // remove the '\n' and '\t'... characters from the prompt
        const surprisemePrompt = GPTResponse.data.choices[0].text?.escape();
        res.status(200).json({prompt: surprisemePrompt});
        console.log("\t[ SURPRISE ME PROMPT ]: ", surprisemePrompt);
    }
    catch(error){
        console.log(error);
        res.status(500).send();
    }
};

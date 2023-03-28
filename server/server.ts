import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// Mongodb connection
import { mongoConnect } from "./database/connect";


//routes

const server = express();
//Middelwares:
server.use(cors());
server.use(express.json({limit: '50mb'}));
dotenv.config();

const PORT = process.env.PORT || 7000;
//init the server:
server.listen(PORT, ()=> console.info(`=> Server is live in: http://localhost:${PORT}`));
// MONGODB CONNECTION SETUP
mongoConnect(process.env.MONGODB_URL as string, "leorodney"); 

//Routes handellers:
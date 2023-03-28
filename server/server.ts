import express from "express";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import cors from "cors";
// Mongodb connection
import { mongoConnect } from "./database/connect";
// Routes
import { communityRoute } from "./routes/community";
import { productionRoute } from "./routes/production";
import { promptRoute } from "./routes/prompt";

// init the server:
const server = express();

// setup rate limiter
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 10 // limit each IP to 10 requests per 1 minutes
});
//Middelwares:
server.use(cors());
//  apply to all requests
server.use(limiter);
server.use(express.json({limit: '50mb'}));
dotenv.config();

const PORT = process.env.PORT || 7000;
//init the server:
server.listen(PORT, ()=> console.info(`=> Server is live in: http://localhost:${PORT}`));
// MONGODB CONNECTION SETUP
mongoConnect(process.env.MONGODB_URL as string, "leorodney"); 

//Routes handellers:
server.get("/showcases", communityRoute);
server.post("/production", productionRoute);
server.post("/prompt", promptRoute);
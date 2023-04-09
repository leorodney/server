import express from "express";
import dotenv from "dotenv";
// Mongodb connection
import { mongoConnect } from "./database/connect";
// Routes
import { communityRoute } from "./routes/community";
import { productionRoute } from "./routes/production";
import { promptRoute } from "./routes/prompt";
import { loginRoute } from "./routes/login";
import { registerRoute } from "./routes/register";
// Types
import { SessionUser } from "./src/@types/session-user";
// Configs
import { corsConfig, luscaConfig, limiterConfig, sessionConfig, helmetConfig } from "./configs";
// Middlewares
import { consoleMiddleware } from "./middlewares";
import { csrf } from "lusca";

declare module "express-session" {
    interface SessionData {
        user: SessionUser;
    }
}

// init the server:
const server = express();

//setup express server Middelwares:
server.use(helmetConfig) // helmet configuration
server.use(corsConfig); // cors configuration
// server.use(luscaConfig); // lusca protection configuration
server.use(limiterConfig); // rate limiter
server.use(sessionConfig); // session configuration
server.use(express.urlencoded({limit: '50mb', extended: false})); // parse application/x-www-form-urlencoded
server.use(express.json({limit: '50mb'})); // parse application/json with boundary limit of 50mb
server.use(consoleMiddleware); // console middleware
dotenv.config();

const PORT = process.env.PORT || 7000;
//init the server:
server.listen(PORT, ()=> console.info(`=> Server is live in: http://localhost:${PORT}`));
// MONGODB CONNECTION SETUP
mongoConnect(process.env.MONGODB_URL as string, "leorodney"); 

//Routes handellers:
server.post(["/signin", "/login"], loginRoute);
server.post(["/signup", "/register"], registerRoute);
server.get("/showcases", communityRoute);
server.post("/production", productionRoute);
server.post("/prompt", promptRoute);
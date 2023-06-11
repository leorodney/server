import express from "express";
import dotenv from "dotenv";
// Routes
import { authorizationRoute } from './routes/auth';
import { registerRoute } from './routes/register';
import { loginRoute } from './routes/login';
import { logoutRoute } from "./routes/logout";
// Micro Database connection
import { mongoConnect } from "./database/connect";
// Configs
import { corsConfig, luscaConfig, limiterConfig, helmetConfig, sessionConfig } from "./configs";
// Middlewares
import { consoleMiddleware } from "./middlewares";
// Types
import { SessionUser } from "./types/user";
// load .env variables
dotenv.config();

declare module "express-session" {
    interface SessionData {
        user: SessionUser;
    }
}

// init the microservice:
const microservice = express();

//setup express microservice Middelwares:
// => security middlewares
microservice.use(corsConfig); // cors configuration
microservice.use(limiterConfig); // rate limiter
microservice.use(helmetConfig) // helmet configuration
// microservice.use(luscaConfig); // lusca protection configuration
microservice.use(sessionConfig) // session configuration
// => body parser middlewares
microservice.use(express.urlencoded({extended: false})); // parse application/x-www-form-urlencoded
microservice.use(express.json()); // parse application/json
// => custom middlewares
microservice.use(consoleMiddleware); // console middleware

//init the microservice:
microservice.listen(process.env.MICROSERVICE_PORT, ()=> console.info(`=> microservice [${process.env.MICROSERVICE_NAME}] is live in: http://localhost:${process.env.MICROSERVICE_PORT}`));
// MONGODB CONNECTION SETUP
mongoConnect(process.env.MONGODB_URL as string, process.env.MONGODB_DB as string); 

//Routes handellers:
microservice.get("/", authorizationRoute);
microservice.post(["/signin", "/login"], loginRoute);
microservice.post(["/signup", "/register"], registerRoute);
microservice.post("/logout", logoutRoute);


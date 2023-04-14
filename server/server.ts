import express from "express";
import dotenv from "dotenv";
// Mongodb connection
import { mongoConnect } from "./database/connect";
// Routes
import { communityRoute } from "./routes/community";
import { productionRoute } from "./routes/production";
import { promptRoute } from "./routes/prompt";
import { authorizationRoute } from "./routes/auth";
import { loginRoute } from "./routes/login";
import { registerRoute } from "./routes/register";
// Configs
import { corsConfig, luscaConfig, limiterConfig, sessionConfig, helmetConfig } from "./configs";
// Middlewares
import { consoleMiddleware } from "./middlewares";
// Types
import { SessionUser } from "./src/@types/session-user";
import { surprisemeRoute } from "./routes/surpriseme";
declare module "express-session" {
    interface SessionData {
        user: SessionUser;
    }
}

// load .env variables
dotenv.config();

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

const PORT = process.env.PORT || 7000;
//init the server:
server.listen(PORT, ()=> console.info(`=> Server is live in: http://localhost:${PORT}`));
// MONGODB CONNECTION SETUP
mongoConnect(process.env.MONGODB_URL as string, process.env.MONGODB_DB as string); 

//Routes handellers:
server.post(["/signin", "/login"], loginRoute);
server.post(["/signup", "/register"], registerRoute);
server.get("/auth", authorizationRoute);
server.get("/showcases", communityRoute);
server.post("/production", productionRoute);
server.get("/surpriseme", surprisemeRoute);
server.post("/prompt", promptRoute);
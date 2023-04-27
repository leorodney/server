import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";
// Configs
import { corsConfig, luscaConfig, limiterConfig, helmetConfig } from "./configs";
// Middlewares
import { consoleMiddleware } from "./middlewares";
// load .env variables
dotenv.config();

// init the getway:
const getway = express();

//setup express getway Middelwares:
// => security middlewares
getway.use(corsConfig); // cors configuration
getway.use(limiterConfig); // rate limiter
getway.use(helmetConfig) // helmet configuration
// getway.use(luscaConfig); // lusca protection configuration
// => body parser middlewares
getway.use(express.urlencoded({limit: '1mb', extended: false})); // parse application/x-www-form-urlencoded
getway.use(express.json({limit: "5mb"})); // parse application/json
// => custom middlewares
getway.use(consoleMiddleware); // console middleware

//init the getway:
getway.listen(process.env.GETWAY_PORT, ()=> console.info(`=> [GETWAY] is live on: http://localhost:${process.env.GETWAY_PORT}`));

//Microservices Routes handellers:
getway.use("/auth", proxy(process.env.AUTH_MICROSERVICE_URL as string));
getway.use("/surpriseme", proxy(process.env.PROMPTING_MICROSERVICE_URL as string));
getway.use("/production", proxy(process.env.PRODUCTION_MICROSERVICE_URL as string));
getway.use("/prompts", proxy(process.env.PROMPTS_MICROSERVICE_URL as string));


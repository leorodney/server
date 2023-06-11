import express from "express";
import dotenv from "dotenv";
// Routes
import { surprisemeRoute } from "./routes";
// Configs
import { corsConfig, luscaConfig, limiterConfig, helmetConfig } from "./configs";
// Middlewares
import { consoleMiddleware } from "./middlewares";
// load .env variables
dotenv.config();

// init the microservice:
const microservice = express();

//setup express microservice Middelwares:
// => security middlewares
microservice.use(corsConfig); // cors configuration
microservice.use(limiterConfig); // rate limiter
microservice.use(helmetConfig) // helmet configuration
// microservice.use(luscaConfig); // lusca protection configuration
// => body parser middlewares
microservice.use(express.urlencoded({extended: false})); // parse application/x-www-form-urlencoded
microservice.use(express.json()); // parse application/json
// => custom middlewares
microservice.use(consoleMiddleware); // console middleware

//init the microservice:
microservice.listen(process.env.MICROSERVICE_PORT, ()=> console.info(`=> microservice [${process.env.MICROSERVICE_NAME}] is live in: http://localhost:${process.env.MICROSERVICE_PORT}`));
//Routes handellers:
microservice.get("/", surprisemeRoute);

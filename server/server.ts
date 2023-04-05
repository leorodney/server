import express from "express";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import cors from "cors";
import csrf from "lusca";
import session from "express-session";
// Mongodb connection
import { mongoConnect } from "./database/connect";
import MongoStore from "connect-mongo";
// Routes
import { communityRoute } from "./routes/community";
import { productionRoute } from "./routes/production";
import { promptRoute } from "./routes/prompt";
import { loginRoute } from "./routes/login";
import { registerRoute } from "./routes/register";
// Types
import { SessionUser } from "./src/@types/session-user";


declare module "express-session" {
    interface SessionData {
        user: SessionUser;
    }
}

// init the server:
const server = express();

// remove the x-powered-by header (fingerprints the server)
server.disable("x-powered-by");

// setup rate limiter
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 10 // limit each IP to 10 requests per 1 minutes
});

// setup session
const sessionConfig = session({
    secret: process.env.SESSION_SECRET as string,
    name: "leorodney.SID",
    resave: false,
    saveUninitialized: false,
    cookie: { 
        // secure: true, // only send cookie over https wich is not the case in development
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URL as string,
        dbName: process.env.MONGODB_DB as string,
        collectionName: "sessions",
        ttl: 60 * 60 * 24 // 1 day
    }) 

});

//Middelwares:
server.use(cors());
server.use(csrf()); // csrf protection (cross site request forgery)
server.use(limiter);
server.use(sessionConfig);
server.use(express.urlencoded({limit: '50mb', extended: true}));
server.use(express.json({limit: '50mb'}));
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
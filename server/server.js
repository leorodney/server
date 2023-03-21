const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

//routes
const { mongoConnect } = require("./database/connect");

const server = express();
//Middelwares:
server.use(cors());
server.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
//init the server:
server.listen(PORT, ()=> console.info(`=> Server is live in: http://localhost:${PORT}`));
// MONGODB CONNECTION SETUP
mongoConnect(process.env.MONGODB_URL, "leorodney");

//Routes handellers:
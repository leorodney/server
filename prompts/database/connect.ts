import mongoose from "mongoose";

/**
 * establish connection to mongoDB
 * @param uri 
 * @param dbName 
 */
export function mongoConnect(uri:string, dbName:string): void{
    mongoose.set("strictQuery", true);
    mongoose.connect(uri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        dbName
    })
    .then(() => console.info(`=> Conncted to mongoDB succesfully. at Node[${dbName}]`))
    .catch(console.error);
    
}
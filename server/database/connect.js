const mongoose = require("mongoose");

const mongoConnect = (uri, dbName) =>{
    mongoose.set("strictQuery", true);
    mongoose.connect(uri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        dbName
    })
    .then(()=> console.info(`=> Conncted to mongoDB succesfully. at Node[${dbName}]`))
    .catch(console.error);
}

module.exports = { mongoConnect };
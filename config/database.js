const mongoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "hr";

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConection = mongoose.connection;
    dbConection.on("error", console.error.bind(console, "MongoDB Conection error"))
}
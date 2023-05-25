const dotenv=require("dotenv");

const path=require("path");

// load the env var to the node process(process.env)
dotenv.config({path:path.join(__dirname,"../../.env")});

const {PORT,MONGODB_CONNECTION_STRING} = process.env
module.exports={PORT,MONGODB_CONNECTION_STRING}
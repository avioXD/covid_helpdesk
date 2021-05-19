const mongoose = require('mongoose');
const path = require('path');
const dotEnv = require('dotenv');

dotEnv.config({path: path.join(__dirname,"../config.env")});


const mongooseState = mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log("Atlas DB connection successful! ")
}).catch((e)=>{
    console.log("DB connection Error: Fault! "+e);
});

module.exports = mongooseState;
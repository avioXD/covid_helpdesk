const mongoose = require('mongoose');
const createPostSchema = new mongoose.Schema({
    name:{
        type:String,
        require :true ,   
    },
    title:{
        type: String ,
        require: true,
    },
    contact:{
        type:Number,
        require: true
    },
    content:{
        type:String,
        require: true
    },
    img:[{
        src:{
            type:String,
        }
    }],
    aprove:{
        type: Number,
        require: true,
    },
    donation:{
        type:Number,
    },
    link:{
        type:String,
    }
    ,date:{
        type:Date,
        require: true,
    }
 
})

const CreatePost = mongoose.model('HELPPOSTS',createPostSchema);
module.exports = CreatePost ;

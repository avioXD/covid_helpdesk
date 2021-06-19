const mongoose = require('mongoose');
const oxygenLeads = new mongoose.Schema({
    name:{
        type:String,
        require: true,
    },
    contact:{
        type:Number,
        require: true,
    },
    address:{
        type:String,
        require: true,
    },
    details:{
        type:String,
        require: true,
    },
    type:{
        type:String,
        require: true,
    },
    update:{
        type:Date,
        require: true
    }
})

const OxygenLeads = mongoose.model('OXYGENLEADS', oxygenLeads)
module.exports = OxygenLeads;
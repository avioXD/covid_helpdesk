const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    sl:{
        type:String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    address:{
        type: String,
        require: true,
    },
    contact:{
        type: Number,
        require: false,
    },
    pin:{
        type:Number,
        require: true,
    },
    state:{
        type: String,
        require: false,
    },
    bed_avil:{
        type:Number,
        require: false,
    },
    h_type:{
        type: String,
        require: false,
    }

})

const Hospital = mongoose.model('HOSPITAL',hospitalSchema) ;
module.exports = Hospital;
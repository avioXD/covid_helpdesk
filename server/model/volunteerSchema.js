const mongoose = require('mongoose');
const volunteerSchema = new mongoose.Schema({
     name:{
         type: String,
         require:true,
     },
     email:{
        type: String,
        require:true,
      } ,
      contact:{
        type: Number,
         require:true,
      },
      gender:{
          type: String,
          require: true,
      },
      age:{
          type: Number,
          require: true,
      },
      wap: {
        type: Number,
        require:false,
      },
      fb: {
        type: String,
        require:false,
      },
      insta: {
            type: String,
            require:false,
      },
    state: {
        type: Boolean,
        require: true
    },
    join_date: {
        type: Date,
        require:true,
    },
    leave_date:{
        type: Date,
        require:false,
    },
    ratings:[ {
        rater_id: {
            type:String,
            require: false,
        },
        rating:{
            type:String,
            required: false,
        }
    }],
    available_time:{
        type:String,
        require: false,
    },
    __v: {
        type: Boolean,
        rquired: true,
    },
    update:{
        type: Date,
        require:true,
    }

})


const Volunteer = mongoose.model('VOLUNTEER',volunteerSchema);
module.exports = Volunteer;
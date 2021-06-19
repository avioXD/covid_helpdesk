

const VolunteerModel = require('../model/volunteerSchema');


exports.createUser= async (req,res)=>{
    
    if (!req.body.name || !req.body.email || !req.body.contact || !req.body.wap) {
        return res.status(422).send("Fields Are Not satisfied!");;
    }
    VolunteerModel.findOne({ email: req.body.email }).then((exist) => {
         if (exist) {
             return res.status(422).send("This Volunteer Already In lobby");
         }
        const newVolunteer = new VolunteerModel({
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            gender: req.body?.gender,
            age: req.body?.age,
            wap: req.body.wap,
            fb: req.body.fb,
            insta: req.body.insta,
            state: req.body.state,
            join_date: new Date(),
            leave_date: req.body?.leave_date,
            ratings: null,
            available_time: req.avl_time,
            __v: req.body.__v,
        })
        newVolunteer.save().then((volunteer) => {
           return res.status(200).json(volunteer)
        }).catch((err) => {
            return res.status(500).send("Server Error!" ,err);
        })
    })
}
exports.findOne = (req,res) =>{
    if(!req.body){
        return res.status(422).send("Fields Are Not satisfied!");;
    }
    const _id= req.params.id;
    VolunteerModel.findById(_id).then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(422).send(err);
    })
}
//update user
exports.updateUser=(req,res)=>{
    if(!req.body){
        return res.status(422).send("Fields Are Not satisfied!");
    }
    const _id=req.params.id;
    VolunteerModel.findByIdAndUpdate(_id,req.body,{useFindAndModify: false , update: new Date()}).then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(422).send(err);
    })
}

// find all 
exports.findAll = (req,res) =>{
    VolunteerModel.find().then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(422).send(err);
    })
}
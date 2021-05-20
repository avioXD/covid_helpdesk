const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
app.use(express.json());


// Get All Volunteer List:
const VolunteerModel = require('../model/volunteerSchema');
router.get("/GET/volenteers",(req,res)=>{
    VolunteerModel.find().then((data)=>{
        res.status(200).send(data);
    }).catch(err=>{
        res.status(422).send("Can't Fetch");
    })
})

//Get All Volunter List: 
const HospitalModel = require('../model/hospitalSchema');
router.get("/GET/hospitals",(req,res)=>{
    HospitalModel.find().then((data)=>{
        res.status(200).send(data);
    }).catch(err=>{
        res.status(422).send("Can't Fetch");
    })
})
module.exports = router;
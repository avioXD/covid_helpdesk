const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
app.use(express.json());


// Get All Volunteer List:
const VolunteerModel = require('../model/volunteerSchema');
router.get("/GET/volenteers",(req,res)=>{
    VolunteerModel.find({__v: true}).then((data)=>{
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


//get Posts:
const createPost = require('../model/createpostSchema');
router.get('/GET/createpost',(req,res)=>{
    createPost.find({aprove: 1}).then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(422).send("Server Error!");
    })
})

//get Cases: 
const cases = require("../model/covidcasesSchema");
router.get('/GET/covidupdates',(req,res)=>{
    cases.find().sort({update: -1}).then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(422).send("Server Error!");
    })
})
// all:
router.get('/GET/covidcases',(req,res)=>{
    cases.find().then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(422).send("Server Error!");
    })
})

//Get oxygen Leads:
const OxygenLeads = require('../model/oxygenSchema');
router.get('/GET/oxygenleads',(req,res)=>{
    OxygenLeads.find().then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        res.status(422).send("Server Error!");
    })
})
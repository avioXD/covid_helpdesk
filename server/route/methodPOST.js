const express = require('express');
const { Mongoose, Error } = require('mongoose');
const path = require('path');
const router = express.Router();
const app = express();
app.use(express.json());

// Volunteer Data Entry: 
const VolunteerModel = require('../model/volunteerSchema');
router.post('/POST/volunteers', async (req, res) => {

    console.log(req.body);
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
            gender: req.body.gender,
            age: req.body.age,
            wap: req.body.wap,
            fb: req.body.fb,
            insta: req.body.insta,
            state: req.body.state,
            join_date: new Date(),
            leave_date: null,
            ratings: null,
            available_time: null,
            varified: false,
        })
        newVolunteer.save().then((volunteer) => {
            res.status(200).json(volunteer);
        }).catch((err) => {
            return res.status(422).send("Server Error!");
        })
    })


})

// Hospital Data Entry: 
//hospital : hsp
//Nursinghome : nsp
//Helthcenter: hcs
const excelToJson = require('convert-excel-to-json');
const HospitalModel = require('../model/hospitalSchema');
router.post('/POST/hospitals',async (req, res) => {
     body = req.body.Sheet1;
    //console.log(body);

    if (!body) {
        return res.status(422).send("No File found!");
    }
try{
    body.forEach((item,index)=>{
        newEntry = new HospitalModel({
            sl:item.SL ,
            name: item.NAME,
             address: item.ADDRESS,
             contact: null,
             pin: item.PIN,
             state: "WestBengal",
             bed_avil: 100,
             h_type: "hsp"
         })
         newEntry.save().then((data) => {
        }).catch((err) => {
            throw new Error(err);
        })
    })
}catch(error){
    return res.status(500).send("Server Error!")
}
return res.status(200).send("Upload sucessfull!")
    
})










// exporting Module: 
module.exports = router;
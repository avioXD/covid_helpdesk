const express = require('express');
const { Mongoose, Error } = require('mongoose');
const path = require('path');
const router = express.Router();
const app = express();
const multer = require('multer');
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// Volunteer Data Entry: 
const VolunteerModel = require('../model/volunteerSchema');
router.post('/POST/volunteers', async (req, res) => {

    // console.log(req.body);
    if (!req.body.name || !req.body.email || !req.body.contact || !req.body.wap) {
        return res.status(422).send("Fields Are Not satisfied!");;
    }
    VolunteerModel.findOne({ email: req.body.email }).then((exist) => {
        if (exist) {
            return res.status(422).send("This Volunteer Already In lobby");
        }
        const newVolunteer = new VolunteerModel({
            name: req.body?.name,
            email: req.body.email,
            contact: req.body.contact,
            gender: req.body?.gender,
            age: req.body?.age,
            wap: req.body?.wap,
            fb: req.body.fb,
            insta: req.body.insta,
            state: req.body.state,
            join_date: new Date(),
            leave_date: null,
            ratings: null,
            available_time: null,
            __v: req?.__v,
        })
        newVolunteer.save().then((volunteer) => {
            res.status(200).json(volunteer);
        }).catch((err) => {
            return res.status(422).send(`${err}`);
        })
    })


})

// Hospital Data Entry: 
//hospital : hsp
//Nursinghome : nsp
//Helthcenter: hcs
const excelToJson = require('convert-excel-to-json');
const HospitalModel = require('../model/hospitalSchema');
router.post('/POST/hospitals', async (req, res) => {
    body = req.body.Sheet1;
    //console.log(body);

    if (!body) {
        return res.status(422).send("No File found!");
    }
    try {
        body.forEach((item, index) => {
            newEntry = new HospitalModel({
                sl: item.SL,
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
    } catch (error) {
        return res.status(500).send("Server Error!")
    }
    return res.status(200).send("Upload sucessfull!")

})


//create post
const CreatePost = require('../model/createpostSchema');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    }, filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now())
    }
})
const upload = multer({ storage: storage });

router.post('/POST/createpost', (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(422).send("fields are empty!");
    }
    upload.single(body?.img);
    // console.log(typeof body.img);
    const newPost = new CreatePost({

        name: body.name,
        title: body.title,
        contact: body?.contact,
        content: body.content,
        img: [{
            src: body.img,
        }],
        aprove: 0,
        donation: 0,
        link: body?.link,
        date: new Date()
    })
    newPost.save().then((data) => {
        return res.status(200).send(data);
    }).catch((err) => {
        return res.status(422).send("Somthing is wrong");
    })


})


//Oxygen leads : 
const OxygenLeads = require('../model/oxygenSchema');
router.post('/POST/oxygenleads',(req,res)=>{
    const body = req.body;
    if(!body.name || !body.contact || !body.address){
        return res.status(422).send("fields are empty!");
    }
    const newLead = new OxygenLeads({
        name:body.name,
        contact:body.contact,
        address:body.address,
        details:body.details,
        type:body.type,
        update:new Date()
    })
    newLead.save().then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(422).send("Submition Failed!");
    })

})









// exporting Module: 
module.exports = router;
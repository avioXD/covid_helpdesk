const express = require('express');
const { Mongoose, Error } = require('mongoose');
const path = require('path');
const router = express.Router();
const app = express();
app.use(express.json());

// Volunteer edit request : 
const Volunteecurd= require('../admin/CURD_volunteer');
router.post('/admin/POST/volunteers',Volunteecurd.createUser);
router.put('/admin/PUT/volunteers/:id',Volunteecurd.updateUser);
router.get('/admin/GET/volunteers/:id',Volunteecurd.findOne);
router.get('/admin/GET/volunteers',Volunteecurd.findAll);

//post edit request: 
const PostCURD = require('../admin/CURD_posts')
router.get('/admin/GET/posts/unaprove',PostCURD.unAprove);
router.get('/admin/GET/posts/aprove',PostCURD.aprove);
router.put('/admin/PUT/posts/aprove/:id',PostCURD.validatePost);
router.delete('/admin/DEL/posts/:id',PostCURD.deletePost)


//update cases: 
const casesCURD = require('../admin/CURD_covidcases');
router.post('/admin/POST/updatecases',casesCURD.updateCases);
router.get('/admin/GET/updatecases',casesCURD.getAllCases)
router.delete('/admin/DEL/deletecases/:id',casesCURD.deleteCases)
// Hospital Admin Requests: 
const HospitalCURD = require('../admin/CURD_hospitals');
router.put('/admin/PUT/hospitals/bedupdate/:id',HospitalCURD.updateBed);
router.get('/admin/GET/hospitals',HospitalCURD.getHospitals);
router.post('/admin/POST/hospitals/xls',HospitalCURD.addXlsHospitals);

module.exports = router;
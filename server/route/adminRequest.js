const express = require('express');
const { Mongoose, Error } = require('mongoose');
const path = require('path');
const router = express.Router();
const app = express();
app.use(express.json());
const curd= require('../admin/CURD_volunteer');
// Volunteer edit request : 

router.post('/admin/POST/volunteers',curd.createUser);
router.put('/admin/PUT/volunteers/:id',curd.updateUser);
router.get('/admin/GET/volunteers/:id',curd.findOne);
module.exports = router;
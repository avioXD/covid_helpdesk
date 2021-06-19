const Hospitals = require('../model/hospitalSchema');


//hospital : hsp
//Nursinghome : nsp
//Helthcenter: hcs
exports.addXlsHospitals= (req,res)=>{
    if(!req.body){
        return res.status(400).send('Bad Request!');
    }
    const dataset = [];
    req.body.Sheet1.forEach(element => {
        const newDataset = new Hospitals({
            sl: element.sl,
            name:element.name,
            address:element.address ,
            contact:element?.contact ,
            pin: element?.pin,
            state: element?.state,
            bed_avil:element?.beds ,
            h_type:"hsp" ,
            update: new Date()
        });
        dataset.push(newDataset);
        newDataset.save().then((data)=>{
            // return res.status(200).send("Submitted");
        }).catch((err)=>{
            return res.status(422).send("Error comming");
        })
    });
    return res.status(200).send("Submitted");
    
    
}

exports.removeHospital= (req,res)=>{

}

exports.updateBed= (req,res)=>{
    if(!req.params || !req.body){
        return res.status(400).send('Bad Request!');
    }
    const _id  = req.params.id;
    
    Hospitals.findByIdAndUpdate(_id,{bed_avil: req.body.bed_avil, update: new Date()}).then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(422).send(err);
    })
}
exports.getHospitals= (req,res)=>{
    Hospitals.find().then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(422).send("Unable to get");
    })
}


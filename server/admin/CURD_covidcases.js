const Cases= require('../model/covidcasesSchema');

exports.updateCases = async (req,res)=>{
    const body = req.body;
    if(!body){
        return res.status(422).json({message: "Bad Request!"})
    }
    if( !body.active || !body.deaths || !body.recovered || !body.newcase){
        return res.status(422).json({message: "Bad Request!"})
    }
    const caseUpdate = new Cases({
        newcase:body.newcase,
        active:body.active,
        deaths:body.deaths,
        recovered:body.recovered,
        update: new Date(),
    })
    caseUpdate.save().then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(422).json({error: "Request Field!"});
    })
}
exports.getAllCases = (req, res)=>{
        Cases.find().sort({update: -1}).then((result)=>{
            return res.status(200).send(result);
        }).catch((err)=>{
            return res.status(422).json({error: "Request Field!"});
        })
}
exports.deleteCases = (req , res)=>{
    const params = req.params;
    if(!params){
        return res.status(422).json({message: "Bad Request!"})
    }
    Cases.findByIdAndDelete({_id: params.id}).then((result)=>{
        return res.status(200).send(result);
    }).catch((err)=>{
        return res.status(422).json({error: "Request Field!"});
    })
}
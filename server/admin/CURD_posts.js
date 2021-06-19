const posts = require('../model/createpostSchema');
//Delete post
exports.deletePost = async (req, res) =>{

    if(!req.params.id){
        return res.status(422).send("bad request!")
    }
    var _id = req.params.id;
    posts.findByIdAndDelete(_id).then((result)=>{
        return res.status(200).json({"message": "Deleted"})
    }).catch((err)=>{
        return res.status(422).json({"error": "Server Error"})
    })

}
// veryfy post put method
exports.validatePost = async (req,res)=>{
    if(!req.params.id){
        return res.status(422).send("bad request!")
    }
    // console.log(req.body.aprove);
    var _id = req.params.id;
    posts.findByIdAndUpdate({_id, aprove: 0 },{aprove: 1, __v: 1}).then((result)=>{
        return res.status(200).json({"message": "Aproved!"})
    }).catch((err)=>{
        return res.status(422).json({"error": "Not Aproved!"})
    })
}
//GET unverified posts;
exports.unAprove =  async (req,res)=>{
     posts.find({aprove: 0 , __v:0}).then((result)=>{
        //  console.log(result);
         return res.status(200).json(result);
     }).catch((err)=>{
         return res.status(422).send(" Unable To Get");
     })
}
exports.aprove =  async (req,res)=>{
    posts.find({aprove: 1}).then((result)=>{
        // console.log(result);
        return res.status(200).json(result);
    }).catch((err)=>{
        return res.status(422).send(" Unable To Get");
    })
}
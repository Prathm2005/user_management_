const User = require("../model/user.js");


exports.createUser= async(req,res)=>{
    try {
        const user=await User.create(req.body);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

exports.getUsers=async(req,res)=>{
    try {
        const user=await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};
exports.getusersId=async(req,res)=>{
    try {
        const user=await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

exports.updateUsers=async(req,res)=>{
    try {
        const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.deleteUsers=async(req,res)=>{
    try {
        const user=await User.findByIdAndDelete(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}


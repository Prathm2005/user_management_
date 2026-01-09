const express =require("express");
const router= express.Router();

const {createUser,updateUsers,deleteUsers,getUsers,getusersId}=require("../controllers/usercontroller.js");

router.post("/",createUser);
router.put("/:id",updateUsers);
router.delete("/:id",deleteUsers);
router.get("/",getUsers);
router.get("/:id",getusersId);

module.exports=router;
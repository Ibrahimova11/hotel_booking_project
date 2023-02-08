import express from "express";
const router=express.Router();


router.get("/", (req,res)=>{
    res.send("Hello,this is auth endpoint")
})
router.get("/registr", (req,res)=>{
    res.send("Hello,this is  auth registr endpoint")
})


export default router
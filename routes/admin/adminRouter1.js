import express from "express";
const router=express.Router();
module.exports=router;
router.get('/index',require('../../controller/admin').index())
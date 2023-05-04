import Express  from "express";
import {  getalluser,  signup } from "../controller/user-controller.js";


const router=Express.Router();
router.get('/',getalluser);
 router.post('/signup',signup)
 

export default router;

import Express  from "express";
import {  getalluser,  getfiltereduser,  signup } from "../controller/user-controller.js";


const router=Express.Router();
router.get('/api/items',getalluser);
router.get('/api/',getfiltereduser);
 router.post('/signup',signup)
 

export default router;

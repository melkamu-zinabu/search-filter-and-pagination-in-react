import Express  from "express";
import { getinfo, infocontroller } from "../controller/info-controller.js";
const router=Express.Router();
router.post('/addinfo',infocontroller)
router.get('/',getinfo)
//router.post('/addinfo',infocontroller);

export default router;
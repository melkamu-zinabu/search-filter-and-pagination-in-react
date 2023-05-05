import Express  from "express";
import { getimage, imageuploadcont } from "../controller/image-controller.js";

const router=Express.Router();
router.post('/',imageuploadcont);
router.get('/image',getimage)

export default router;
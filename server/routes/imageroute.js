import Express  from "express";
import { getImageById, getimage, imageuploadcont } from "../controller/image-controller.js";
import { upload } from "../controller/uploads.js";
const router=Express.Router();

router.post('/',upload.single('image'),imageuploadcont);
router.get('/image:id',getImageById)
router.get('/image',getimage)
export default router;
// import Express  from "express";
// 
// import path from 'path';
// import { getimage, imageupload } from "../controller/image-controller";
// const router=Express.Router();

//import multer from "multer";
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/')
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + path.extname(file.originalname))
//     }
//   });
// const upload = multer({ storage: storage });



// router.post('/uploads',upload.single('image'),imageupload);
// router.get('/images/:id',getimage)

// export default router;
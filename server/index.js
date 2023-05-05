
// kechat gpt lay first do pagination then fil
import  express from "express";
import dotenv from 'dotenv'
import multer from "multer";
import path from 'path';
import fs from 'fs'
import  CONNECTDB  from "./config/db.js"
import userroute from "./routes/userroute.js"
//import {imageroute } from './routes/imageroute.js'
import cors from "cors"
dotenv.config();


const app=express();
app.use(express.json());

// we are telling this application will use only json to communicate
app.use(cors({
   origin: 'http://localhost:3001', // specify the URL of the client that can make requests
   methods: ['GET', 'POST'], // specify the methods that are allowed
 }));
CONNECTDB();
const port=3000;

//when you use a reference (ref) in a Mongoose schema,
// it will store the ID of the referenced document in the field instead of embedding the whole document.
//here is the middleware
app.use('/user', userroute)
//app.use('/', imageroute)


// i am done with the basic api but we have to design database for better use after 2:18 minute
   
   // admin -add movie to the db
//addedmovie-erasuyemolachew


    //movie
//admin- that adds the movie
//booking

   //user -create the booking
//booking erasu yrmolachew
  
   //booking inside the booking we will have the refernce of user and movie
//user
//movie

// NOW I NEED TO DO PAGINATION, SEARCH FILTER AND OTHER
// GIVE THE ENDPOINT CODE TO THE CHAT GPT IT WILL RETURN THE CODE WITH PAGINATION AND WITH SEARCH AND FILTER
//passport.js and socket.io and deployment, validator,  cons










const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  });
const upload = multer({ storage: storage });

app.post('/',upload.single('image'),async (req,res)=>{
   const newImage = new Image({
      //metadata
      //this endpoint can access the uploaded file using req.file and process it as needed.
      name: req.file.originalname,
      contentType: req.file.mimetype,
     // 'data' represents the actual image data in a binary format.
     //Later, when the image is retrieved from the database, the 'data' property can be used to render the image on a web page, by setting the image source to a data URI that contains the binary data.
      data: fs.readFileSync(req.file.path)
    });
  
    try {
      await newImage.save();
      fs.unlinkSync(req.file.path);
      res.send('File uploaded successfully!');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error uploading file!');
    }
        
      

})









app.listen(port,MEL);

function MEL(){
    
        console.log(`bro running ${port}`);
}


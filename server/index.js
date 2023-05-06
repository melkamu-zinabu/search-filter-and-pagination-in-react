
// kechat gpt lay first do pagination then fil
import  express from "express";
import dotenv from 'dotenv'

import  CONNECTDB  from "./config/db.js"
import userroute from "./routes/userroute.js"
import imageroute from './routes/imageroute.js'
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
app.use('/', imageroute)
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























app.listen(port,MEL);

function MEL(){
    
        console.log(`bro running ${port}`);
}


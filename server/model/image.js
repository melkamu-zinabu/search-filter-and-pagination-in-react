import mongoose from "mongoose";
// Define a Mongoose schema for the image file
const imageSchema = new mongoose.Schema({
    name: String,
    contentType: String,
    data: Buffer
  });
  export default  mongoose.model('Image', imageSchema);
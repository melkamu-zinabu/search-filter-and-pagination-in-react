import mongoose from "mongoose";
// Define a Mongoose schema for the image file
// ነውስ ስቶረ ሳደርግ ቲትለ፣ደስችሪፕቲኦን አለ እና ምስል ምስሉን ዳታ ፡buffer bcha mewsed
const imageSchema = new mongoose.Schema({
    name: String,
    contentType: "image/png",
    data: Buffer
  });
  export default  mongoose.model('Image', imageSchema);
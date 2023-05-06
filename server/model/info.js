import mongoose from "mongoose";
// Define a Mongoose schema for the image file
// ነውስ ስቶረ ሳደርግ ቲትለ፣ደስችሪፕቲኦን አለ እና ምስል ምስሉን ዳታ ፡buffer bcha mewsed

    const seasonalInfoSchema = new mongoose.Schema({
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
     
    });
    
    export default mongoose.model('SeasonalInfo', seasonalInfoSchema);
   
 
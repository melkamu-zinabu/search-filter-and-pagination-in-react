
import Images from '../model/image.js'
import fs from 'fs'
export const imageuploadcont=async(req,res,next)=>{

  
  const newImage = new Images({
    //metadata
    //this endpoint can access the uploaded file using req.file and process it as needed.
    
  name: req.body.name,
  img: {
    data: fs.readFileSync("uploads/" + req.file.filename),
    contentType: req.file.mimetype,
  },
    
   // 'data' represents the actual image data in a binary format.
   //Later, when the image is retrieved from the database, the 'data' property can be used to render the image on a web page, by setting the image source to a data URI that contains the binary data.
    
  });
  await newImage
  .save()
  .then((res) => {
    console.log("image is saved");
  })
  .catch((err) => {
    console.log(err, "error has occur");
  });
 







  

}





export const getImageById = async (req, res) => {
  const { id } = req.params;

  try {
    const image = await Images.findById(id);
    if (!image) {
      return res.status(404).send('Image not found');
    }
    res.type(image.img.contentType);
    res.send(image.img.data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving image');
  }
};

//orr

export const getimage=async (req,res)=>{
  const allData = await Images.find()
  if(!allData){
    return res.send('no')
  }
  res.json(allData)
}

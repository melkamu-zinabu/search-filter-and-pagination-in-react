
import fs from 'fs'

export const imageupload= async (req, res) => {
  const newImage = new Image({
    //metadata
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
};




// Define a route to retrieve an image by ID

export const getimage=async (req, res) => {
    try {
      const image = await Image.findById(req.params.id);
      if (!image) {
        res.status(404).send('Image not found');
        return;
      }
      res.contentType(image.contentType);
      res.send(image.data);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving image');
    }
  };



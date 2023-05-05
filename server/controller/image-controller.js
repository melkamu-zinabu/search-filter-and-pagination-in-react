import Images from '../model/image.js'
export const imageuploadcont=async(req,res,next)=>{



}

export const getimage=async(req,res,next)=>{
  try {
          const image = await Images.find();
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

}
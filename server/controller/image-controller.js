



// // Define a route to retrieve an image by ID

// export const getimage=async (req, res) => {
//     try {
//       const image = await Image.findById(req.params.id);
//       if (!image) {
//         res.status(404).send('Image not found');
//         return;
//       }
//       res.contentType(image.contentType);
//       res.send(image.data);
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Error retrieving image');
//     }
//   };



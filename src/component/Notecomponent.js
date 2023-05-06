// //add note

// import React, { useState } from 'react';

// function AddNote() {
//   const [title, setTitle] = useState('');
//   const [image, setImage] = useState('');
//   const [description, setDescription] = useState('');

//   function handleAddNote() {
//     // Logic to add note to database or store goes here
//     // For this example, we'll just log the note to the console
//     console.log({ title, image, description });
//     // Clear the inputs
//     setTitle('');
//     setImage('');
//     setDescription('');
//   }

//   return (
//     <div>
//       <h2>Add a Note</h2>
//       <form onSubmit={(e) => { e.preventDefault(); handleAddNote(); }}>
//         <label>
//           Title:
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Image:
//           <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Add Note</button>
//       </form>
//     </div>
//   );
// }

// export default AddNote;

// ////////////////
// //add note api//
// ///////////////
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// // Set up body parser middleware
// app.use(bodyParser.json());

// // Connect to MongoDB database
// mongoose.connect('mongodb://localhost/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Define a schema for notes
// const noteSchema = new mongoose.Schema({
//   title: String,
//   image: String,
//   description: String
// });

// // Define a model for notes using the schema
// const Note = mongoose.model('Note', noteSchema);

// // Define a POST route to add a note to the database
// app.post('/notes', (req, res) => {
//   const { title, image, description } = req.body;

//   // Create a new note using the Note model
//   const newNote = new Note({
//     title,
//     image,
//     description
//   });

//   // Save the new note to the database
//   newNote.save()
//     .then(() => {
//       res.sendStatus(201); // Created
//     })
//     .catch((error) => {
//       console.error(error);
//       res.sendStatus(500); // Internal Server Error
//     });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });


// /////////////////////
// //retrieve react code
// ////////////////////

// import React, { useState } from 'react';

// export function Note() {

//     const [showFullNote, setShowFullNote] = useState(false);
//     // yhen kedatabase useeffect metakem ena mewsed
//     let note=await note.find
//     const note = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum varius mauris, vel rhoncus nulla pulvinar ac. Aliquam eget justo a ipsum vestibulum auctor. Proin vel velit velit.';
  
//     const shortNote = note.split(' ').slice(0, 6).join(' ') + '...';
//     // shortnote= note.substring(0, 200)}
//     const displayedNote = showFullNote ? note : shortNote;



//     return (
//         <div>
//           <p>{displayedNote}</p>
//           <button onClick={() => setShowFullNote(!showFullNote)}>
//             {showFullNote ? 'Collapse' : 'See More'}
//           </button>
//         </div>
//       );
//     }
    
    


//    /////////////
//    // retrive api like normal api
//    //////////////

//    // Define a GET route to retrieve all notes from the database
// app.get('/notes', (req, res) => {
//     // Find all notes in the database using the Note model
//     Note.find({})
//       .then((notes) => {
//         res.json(notes); // Send the notes as a JSON response
//       })
//       .catch((error) => {
//         console.error(error);
//         res.sendStatus(500); // Internal Server Error
//       });
//   });
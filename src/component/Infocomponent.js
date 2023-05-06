import React, { useState } from 'react';
import axios from 'axios';

const AddSeasonalInfo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // from frontend data can be passed in many way
        //the data is being passed from the frontend to the backend API using JSON payload. The data is sent in the body of the HTTP request as JSON format.
      const response = await axios.post('http://localhost:3000/info/addinfo', { title, description });
      // we will accept these as const { title, description } = req.body;  ... in the api backend
      console.log(response.data);
      // Reset the form after successful submission
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Seasonal Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddSeasonalInfo;





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
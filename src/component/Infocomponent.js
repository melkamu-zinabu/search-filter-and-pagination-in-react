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




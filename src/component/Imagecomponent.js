import React, { useState } from 'react';
import axios from 'axios';

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    // Create a new FormData object and append the selected file
    const formData = new FormData();
    //The append() method is used to add key-value pairs to the FormData object
    formData.append('image', selectedFile);

    try {
      // Send a POST request to the API endpoint with the FormData object 
      await axios.post('http://localhost:3000', formData);
      alert('File uploaded successfully!');
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  return (
    <div>
      <input type="file"   onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>Upload</button>
    </div>
  );
}

export default ImageUploader;

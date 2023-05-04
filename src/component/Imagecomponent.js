import React, { useState } from 'react';
import axios from 'axios';

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
        
      await axios.post('/upload', formData);
      alert('File uploaded successfully!');
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>Upload</button>
    </div>
  );
}

export default ImageUploader;

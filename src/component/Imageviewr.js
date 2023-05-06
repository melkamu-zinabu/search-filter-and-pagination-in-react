import axios from "axios";
import { useState, useEffect } from "react";
function Imageviewr() {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/image")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  return (
    <div className="App">
      <h1>Image uploading react</h1>
      {data.map((singleData) => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(singleData.img.data.data))
        );
        return <img src={`data:image/png;base64,${base64String}`} width="300"/>
      })}
    </div>
  );
  
}

export default Imageviewr;


//or


const ImageDisplay = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Make the API call to retrieve the image data
    axios.get('YOUR_BACKEND_API_ENDPOINT')
      .then(response => {
        setImageData(response.data);
      })
      .catch(error => {
        console.log('Error fetching image data:', error);
      });
  }, []);

  return (
    <div>
      {imageData ? (
        <img src={`data:${imageData.contentType};base64,${imageData.data}`} alt="Image" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

//export default ImageDisplay;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeasonalInfoList = () => {
  const [seasonalInfo, setSeasonalInfo] = useState([]);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    fetchSeasonalInfo();
  }, []);

  const fetchSeasonalInfo = async () => {
    try {
      const response = await axios.get('http://localhost:3000/info/');
      setSeasonalInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderDescription = (description) => {
    if (description.split(' ').length > 20) {
      const truncatedDescription = description.split(' ').slice(0, 20).join(' ');
      

      return (
        <div>
          <p>{expanded ? description : truncatedDescription}</p>
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Collapse' : 'See More'}
          </button>
        </div>
      );
    }

    return <p>{description}</p>;
  };

  return (
    <div>
      <h2>Seasonal Informationmmm</h2>
      {seasonalInfo.map((info) => (
        <div key={info._id}>
          <h3>{info.title}</h3>
          {renderDescription(info.description)}
        </div>
      ))}
      <h2>gysygyyyyyyyy</h2>
    </div>
  );
};

export default SeasonalInfoList;

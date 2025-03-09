import React, { useState, useEffect } from "react";
import axios from "axios";

const Apod = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
          
        );
        setApodData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching APOD data:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };

    fetchApod();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>{error}</p>
      </div>
    );
  }

  if (!apodData) {
    return (
      <div className="error">
        <p>No data available.</p>
      </div>
    );
  }

  return (
    <div className="apod-container">
      <h1>Astronomy Picture of the Day</h1>
      <h2>{apodData.title}</h2>
      <img src={apodData.url} alt={apodData.title} style={{ maxWidth: "100%" }} />
      <p>{apodData.explanation}</p>
      <p className="date">Date: {apodData.date}</p>
    </div>
  );
};

export default Apod;
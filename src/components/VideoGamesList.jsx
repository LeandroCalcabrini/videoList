import { useEffect, useState } from "react";
import "../components/VideoGamesList.css"

const VideoGamesList = () => {
  const [videoGames, setVideoGames] = useState([]);
  const [error, setError] = useState(null);
  const apiGames = async () => {
    try {
      const url = import.meta.env.VITE_API_URL;
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data)
      setVideoGames(data.results)
    } catch (error) {
    setError("Problema al realizar el fetch de la api");
    console.error(error)
      
    }
  };

  useEffect(() => {
    apiGames();
  }, []);

  console.log(videoGames)
  return (
    <>
    </>
  )

};

export default VideoGamesList;

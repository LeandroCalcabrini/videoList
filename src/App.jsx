import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import { contextApp } from "./context/contextApp";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";

function App() {
  const [videoGames, setVideoGames] = useState([]);
  const [error, setError] = useState(null);
  const apiGames = async () => {
    try {
      const url = import.meta.env.VITE_API_URL;
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setVideoGames(data.results);
    } catch (error) {
      setError("Problema al realizar el fetch de la api");
      console.error(error);
    }
  };

  useEffect(() => {
    apiGames();
  }, []);

  console.log(videoGames);
  return (
    <>
      <contextApp.Provider value={{ error, setError }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </BrowserRouter>
      </contextApp.Provider>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import MovieList from "./component/MovieList";

const App = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [selectedLang, setSelectedLang] = useState("Bollywood");

  const loadMovies = async () => {
    try {
      const res = await fetch("http://localhost:8000/movies");
      const data = await res.json();
      setAllMovies(data);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const filterMovies = allMovies.filter(
    (movie) => movie.language.toLowerCase() === selectedLang.toLowerCase()
  );

  const buttons = ["Bollywood", "Gujarati", "Hindi", "English"];

  return (
    <div className="text-center">
      <h1 className="my-4">🎬 BookMyShow Clone</h1>

      {buttons.map((lang) => (
        <button
          key={lang}
          className={`btn mx-2 ${selectedLang === lang ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => setSelectedLang(lang)}
        >
          {lang}
        </button>
      ))}

      <div className="container mt-4">
        <MovieList movies={filterMovies} />
      </div>
    </div>
  );
};

export default App;

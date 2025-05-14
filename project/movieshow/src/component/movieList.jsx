import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (!movies.length) return <p>No movies found in this language.</p>;

  return (
    <div className="row">
      {movies.map((movie) => (
        <div key={movie.id} className="col-md-3 mb-4">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;

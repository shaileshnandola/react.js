import React from "react";

const MovieCard = ({ movie }) => (
  <div className="card h-100">
    <img src={movie.poster} className="card-img-top" alt={movie.title} />
    <div className="card-body">
      <h5 className="card-title">{movie.title}</h5>
      <p className="card-text">Language: {movie.language}</p>
    </div>
  </div>
);

export default MovieCard;

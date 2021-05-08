import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MovieItem.css";

const MovieItem = ({ movie }) => {
  useEffect(() => {}, []);

  return (
    <Link key={movie.id} className={styles.poster} to={`/movie/${movie.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={260}
        height={380}
      />
    </Link>
  );
};

export default MovieItem;

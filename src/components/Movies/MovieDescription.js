import React from "react";
import { BsArrowRight } from "react-icons/bs";

const MovieDescription = ({ movie, data, styles }) => {
  const genreStyle = {
    background: data.darkVibrant,
  };

  return (
    <>
      <h1>{movie.title}</h1>
      <div className={styles.movieGenre}>
        {movie.genres.map((genre) => {
          return (
            <span style={genreStyle} key={genre.id}>
              {genre.name}
            </span>
          );
        })}
      </div>
      <div className={styles.otherInfo}>
        <p>
          <strong>Original language: </strong>
          {movie.original_language}
        </p>
        <p>
          <strong>Release date: </strong>
          {movie.release_date}
        </p>
        <p>
          <strong>Status: </strong>
          {movie.status}
        </p>
        <p>
          <strong>Budget: </strong>
          {movie.budget.toLocaleString()} $
        </p>
        <p>
          <strong>Revenue: </strong>
          {movie.revenue.toLocaleString()} $
        </p>
        <div className={styles.compareArrow}>
          <span>Compare</span> <BsArrowRight />
        </div>
      </div>
      <p>{movie.overview}</p>
    </>
  );
};

export default MovieDescription;

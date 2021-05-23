import React from "react";
import no_poster from "../../assets/no_poster.png";

function MovieImage({ movie, width, height }) {
  return (
    <img
      src={
        movie.poster_path != null
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : no_poster
      }
      alt={movie.title}
      width={width}
      height={height}
    />
  );
}

export default MovieImage;

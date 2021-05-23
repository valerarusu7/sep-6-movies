import React from "react";

function MovieReleaseDate({ movie }) {
  return (
    <div>
      {movie.release_date
        ? movie.release_date.substring(0, 4)
        : movie.first_air_date
        ? movie.first_air_date.substring(0, 4)
        : "Unknown"}
    </div>
  );
}

export default MovieReleaseDate;

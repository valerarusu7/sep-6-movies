import React from "react";

function MovieTitle({ movie }) {
  return (
    <div>
      {movie.title
        ? movie.title
        : movie.name
        ? movie.name
        : movie.original_name}
    </div>
  );
}

export default MovieTitle;

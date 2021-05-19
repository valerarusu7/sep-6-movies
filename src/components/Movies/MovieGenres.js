import React from "react";

const MovieGenres = ({ styles, movie, data }) => {
  const genreStyle = {
    background: data.darkVibrant,
  };

  return (
    <div className={styles.movieGenre}>
      {movie.genres.map((genre) => {
        return (
          <span style={genreStyle} key={genre.id}>
            {genre.name}
          </span>
        );
      })}
    </div>
  );
};

export default MovieGenres;

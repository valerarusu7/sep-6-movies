import React from "react";
import styles from "../../styles/MoviesCategory.module.css";
import { Link } from "react-router-dom";

const MoviesCategory = ({ movies }) => {
  return (
    <div className={styles.container}>
      <div className={styles.movies}>
        {movies !== null || undefined
          ? movies
              .filter((movie) => movie.poster_path != null)
              .map((movie) => (
                <Link
                  className={styles.poster}
                  to={`/movie/${movie.id}`}
                  key={movie.id}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={260}
                    height={380}
                  />
                  <div>
                    {movie.title
                      ? movie.title
                      : movie.name
                      ? movie.name
                      : movie.original_name}
                  </div>
                  <div>
                    {movie.release_date
                      ? movie.release_date.substring(0, 4)
                      : movie.first_air_date
                      ? movie.first_air_date.substring(0, 4)
                      : "Unknown"}
                  </div>
                </Link>
              ))
          : null}
      </div>
    </div>
  );
};

export default MoviesCategory;

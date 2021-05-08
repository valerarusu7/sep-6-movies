import React, { useEffect } from "react";
import styles from "../../styles/MoviesCategory.module.css";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const MoviesCategory = ({ movies, categoryTitle }) => {
  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.movies}>
        {movies !== null ? (
          movies.map((movie) => (
            <Link
              key={movie.id}
              className={styles.poster}
              to={`/movie/${movie.id}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={260}
                height={380}
              />
              <div>{movie.title ? movie.title : movie.name}</div>
              <div>
                {movie.release_date
                  ? movie.release_date.substring(0, 4)
                  : movie.first_air_date.substring(0, 4)}
              </div>
            </Link>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default MoviesCategory;

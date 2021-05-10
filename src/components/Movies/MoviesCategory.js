import React from "react";
import styles from "../../styles/MoviesCategory.module.css";
import MovieItem from "./MovieItem";
import MoviesToolbar from "./MoviesToolbar";

const MoviesCategory = ({ movies, toolbar, type, results }) => {
  return (
    <div className={styles.container}>
      <div className={toolbar ? styles.movies__with__tolbar : styles.movies}>
        {toolbar ? (
          <MoviesToolbar styles={styles} type={type} results={results} />
        ) : null}
        {movies !== null || undefined
          ? movies.map((movie) => (
              <MovieItem movie={movie} styles={styles} key={movie.id} />
            ))
          : null}
      </div>
    </div>
  );
};

export default MoviesCategory;

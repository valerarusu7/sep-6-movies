import React from "react";
import { useSelector } from "react-redux";

const MoviesToolbar = ({ styles, type, results }) => {
  const { showResults } = useSelector((state) => state.movies);

  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbar__left}>
        <div className={styles.show__text}>{type}</div>
        <div className={styles.results}>
          {results ? `${showResults} series` : null}
        </div>
      </div>
      <div className={styles.all}>
        <a className={styles.all__button}>ALL</a>
      </div>
    </div>
  );
};

export default MoviesToolbar;

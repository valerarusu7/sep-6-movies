import React from "react";
import MovieImage from "./Movies/MovieImage";
import MovieReleaseDate from "./Movies/MovieReleaseDate";
import MovieTitle from "./Movies/MovieTitle";

const CompareSearchItem = ({ styles, movie, addCompareItem }) => {
  return (
    <div className={styles.result} onClick={addCompareItem}>
      <MovieImage movie={movie} width={50} />
      <div className={styles.result__info}>
        <MovieTitle movie={movie} />
        <MovieReleaseDate movie={movie} />
      </div>
    </div>
  );
};

export default CompareSearchItem;

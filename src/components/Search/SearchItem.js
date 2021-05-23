import React from "react";
import { Link } from "react-router-dom";
import MovieImage from "../Movies/MovieImage";
import MovieReleaseDate from "../Movies/MovieReleaseDate";
import MovieTitle from "../Movies/MovieTitle";

const SearchItem = ({ movie, handleClick, styles }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      key={movie.id}
      className={styles.result}
      onClick={handleClick}
    >
      <MovieImage movie={movie} width={50} />
      <div className={styles.result__info}>
        <MovieTitle movie={movie} />
        <MovieReleaseDate movie={movie} />
      </div>
    </Link>
  );
};

export default SearchItem;

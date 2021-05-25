import React from "react";
import DescriptionItem from "./DescriptionItem";
import MovieGenres from "./MovieGenres";
import { BsArrowRight } from "react-icons/bs";

const MovieDescription = ({ movie, data, styles }) => {
  return (
    <>
      <h1>{movie.title}</h1>
      <MovieGenres styles={styles} movie={movie} data={data} />
      <div className={styles.otherInfo}>
        <DescriptionItem
          header="Original language:"
          value={movie.original_language}
        />
        <DescriptionItem header="Release date:" value={movie.release_date} />
        <DescriptionItem header="Status:" value={movie.status} />
        <DescriptionItem
          header="Budget:"
          value={`${movie.budget.toLocaleString()} $`}
        />
        <DescriptionItem
          header="Revenue:"
          value={`${movie.revenue.toLocaleString()} $`}
        />
        <div className={styles.compareArrow}>
          <span>Compare </span> <BsArrowRight size="25px" />
        </div>
      </div>
      <p>{movie.overview}</p>
    </>
  );
};

export default MovieDescription;

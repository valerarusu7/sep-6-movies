import React from "react";
import DescriptionItem from "./DescriptionItem";
import MovieGenres from "./MovieGenres";
import { BsArrowRight } from "react-icons/bs";
import { setCompareMovies } from "../../store/reducers/movieReducer";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import moment from "moment";

const MovieDescription = ({ movie, data, styles }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  function compareMovie() {
    let movies = [];
    movies.push(movie);
    dispatch(setCompareMovies(movies));
    history.push("/statistics");
  }

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
        {moment(movie.release_date).isBefore(Date.now()) ? (
          <div className={styles.compareArrow} onClick={() => compareMovie()}>
            <span>Compare </span> <BsArrowRight size="25px" />
          </div>
        ) : moment(movie.first_air_date).isBefore(Date.now()) ? (
          <div className={styles.compareArrow} onClick={() => compareMovie()}>
            <span>Compare </span> <BsArrowRight size="25px" />
          </div>
        ) : null}
      </div>
      <p style={{ textAlign: "justify" }}>{movie.overview}</p>
    </>
  );
};

export default MovieDescription;

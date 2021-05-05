import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import VerticalList from "../components/VerticalList";
import { getMovieById, getMovieCredits } from "../store/reducers/movieReducer";

const Movie = () => {
  const { movie, movieCredits } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMovieById({ id }));
    dispatch(getMovieCredits({ id }));
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={260}
        height={380}
      />
      <VerticalList list={movieCredits.crew} />
    </div>
  );
};

export default Movie;

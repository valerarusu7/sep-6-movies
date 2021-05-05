import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getMovieById } from "../store/reducers/movieReducer";

const Movie = () => {
  const { movie } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getMovieById({ id }));
  }, []);

  return <div>{movie.original_title + movie.popularity}</div>;
};

export default Movie;

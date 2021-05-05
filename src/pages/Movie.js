import React from "react";
import { useSelector } from "react-redux";

const Movie = ({
  match: {
    params: { id },
  },
}) => {
  const { movie } = useSelector((state) => state.movies);

  return <div>{movie.original_title}</div>;
};

export default Movie;

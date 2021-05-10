import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router";
import Loading from "../components/Loading";
import MoviesCategory from "../components/Movies/MoviesCategory";
import { getMovieType } from "../store/reducers/movieReducer";

const Genre = () => {
  const {
    topRatedMovies,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentariesMovies,
    mysteryMovies,
    dramaMovies,
    fantasyMovies,
    loading,
  } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const { type } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getMovieType(type));
  }, [type]);

  return (
    <div>
      {!loading ? (
        <MoviesCategory
          movies={
            type == "comedy"
              ? comedyMovies
              : type == "horror"
              ? horrorMovies
              : type == "top-rated"
              ? topRatedMovies
              : type == "action"
              ? actionMovies
              : type == "romance"
              ? romanceMovies
              : type == "mystery"
              ? mysteryMovies
              : type == "drama"
              ? dramaMovies
              : type == "fantasy"
              ? fantasyMovies
              : type == "documentaries"
              ? documentariesMovies
              : null
          }
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Genre;

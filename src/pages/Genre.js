import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import MoviesCategory from "../components/Movies/MoviesCategory";
import {
  getMovieType,
  moviesSetActionMovies,
  moviesSetComedyMovies,
  moviesSetDocumentariesMovies,
  moviesSetDramaMovies,
  moviesSetFantasyMovies,
  moviesSetHorrorMovies,
  moviesSetMysteryMovies,
  moviesSetRomanceMovies,
  moviesSetTopRatedMovies,
} from "../store/reducers/movieReducer";
import axios from "../store/requests/axios";
import requests from "../store/requests/requests";

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
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { type } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getMovieType(type));
  }, [type]);

  const handleChange = (event, value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(value);
    let id = 0;
    switch (type) {
      case "comedy":
        id = 35;
        break;
      case "horror":
        id = 27;
        break;
      case "top-rated":
        id = 1;
        break;
      case "action":
        id = 28;
        break;
      case "romance":
        id = 10749;
        break;
      case "mystery":
        id = 9648;
        break;
      case "drama":
        id = 18;
        break;
      case "fantasy":
        id = 14;
        break;
      case "documentaries":
        id = 99;
        break;
      default:
        id = 2;
        break;
    }
    getNewMovies(id, value);
  };

  function getNewMovies(id, page) {
    if (id != 1) {
      axios.get(requests.getNewMoviesById(id, page)).then((fetchedMovies) => {
        switch (type) {
          case "comedy":
            dispatch(moviesSetComedyMovies(fetchedMovies.data.results));
            break;
          case "horror":
            dispatch(moviesSetHorrorMovies(fetchedMovies.data.results));
            break;
          case "top-rated":
            dispatch(moviesSetTopRatedMovies(fetchedMovies.data.results));
            break;
          case "action":
            dispatch(moviesSetActionMovies(fetchedMovies.data.results));
            break;
          case "romance":
            dispatch(moviesSetRomanceMovies(fetchedMovies.data.results));
            break;
          case "mystery":
            dispatch(moviesSetMysteryMovies(fetchedMovies.data.results));
            break;
          case "drama":
            dispatch(moviesSetDramaMovies(fetchedMovies.data.results));
            break;
          case "fantasy":
            dispatch(moviesSetFantasyMovies(fetchedMovies.data.results));
            break;
          case "documentaries":
            dispatch(moviesSetDocumentariesMovies(fetchedMovies.data.results));
            break;
          default:
            break;
        }
      });
    } else {
      axios.get(requests.getNewTopRated(page)).then((fetchedMovies) => {
        dispatch(moviesSetTopRatedMovies(fetchedMovies.data.results));
      });
    }
  }

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
          pages={page}
          handleChange={handleChange}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Genre;

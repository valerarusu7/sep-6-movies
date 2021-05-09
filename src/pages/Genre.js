import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router";
import Loading from "../components/Loading";
import MoviesCategory from "../components/Movies/MoviesCategory";
import {
  getActionMovies,
  getComedyMovies,
  getDocumentariesMovies,
  getDramaMovies,
  getFantasyMovies,
  getHorrorMovies,
  getMysteryMovies,
  getRomanceMovies,
  getTopRatedMovies,
} from "../store/reducers/movieReducer";

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
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const { type } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    switch (type) {
      case "comedy":
        dispatch(getComedyMovies());
        setMovies(comedyMovies);
        break;
      case "horror":
        dispatch(getHorrorMovies());
        setMovies(horrorMovies);
        break;
      case "top-rated":
        dispatch(getTopRatedMovies());
        setMovies(topRatedMovies);
        break;
      case "action":
        dispatch(getActionMovies());
        setMovies(actionMovies);
        break;
      case "romance":
        dispatch(getRomanceMovies());
        setMovies(romanceMovies);
        break;
      case "mystery":
        dispatch(getMysteryMovies());
        setMovies(mysteryMovies);
        break;
      case "drama":
        dispatch(getDramaMovies());
        setMovies(dramaMovies);
        break;
      case "fantasy":
        dispatch(getFantasyMovies());
        setMovies(fantasyMovies);
        break;
      case "documentaries":
        dispatch(getDocumentariesMovies());
        setMovies(documentariesMovies);
        break;
      default:
        break;
    }
  }, [type]);

  return (
    <div>{!loading ? <MoviesCategory movies={movies} /> : <Loading />}</div>
  );
};

export default Genre;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesCategory from "../components/Movies/MoviesCategory";
import {
  getActionMovies,
  getComedyMovies,
  getDocumentariesMovies,
  getHorrorMovies,
  getNetflixMovies,
  getRomanceMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../store/reducers/movieReducer";

const Home = () => {
  const {
    trendingMovies,
    topRatedMovies,
    netflixOriginalsMovies,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentariesMovies,
  } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingMovies());
    dispatch(getTopRatedMovies());
    dispatch(getNetflixMovies());
    dispatch(getActionMovies());
    dispatch(getComedyMovies());
    dispatch(getHorrorMovies());
    dispatch(getRomanceMovies());
    dispatch(getDocumentariesMovies());
  }, []);

  return (
    <div>
      <MoviesCategory movies={trendingMovies} categoryTitle={"Trending"} />
      <MoviesCategory movies={topRatedMovies} categoryTitle={"Top Rated"} />
      <MoviesCategory
        movies={netflixOriginalsMovies}
        categoryTitle={"Netflix Originals"}
      />
      <MoviesCategory movies={actionMovies} categoryTitle={"Action"} />
      <MoviesCategory movies={comedyMovies} categoryTitle={"Comedy"} />
      <MoviesCategory movies={horrorMovies} categoryTitle={"Horror"} />
      <MoviesCategory movies={romanceMovies} categoryTitle={"Romance"} />
      <MoviesCategory
        movies={documentariesMovies}
        categoryTitle={"Documentaries"}
      />
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import MoviesCategory from "../components/Movies/MoviesCategory";
import { getTrendingMovies } from "../store/reducers/movieReducer";

const Home = () => {
  const { trendingMovies, loading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, []);

  return (
    <div>
      {!loading ? <MoviesCategory movies={trendingMovies} /> : <Loading />}
    </div>
  );
};

export default Home;

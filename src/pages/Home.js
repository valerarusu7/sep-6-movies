import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import MoviesCategory from "../components/Movies/MoviesCategory";
import { getTrendingMovies } from "../store/reducers/movieReducer";

const Home = () => {
  const { trendingMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const { genre } = useParams();
  {
    console.log(genre);
  }
  useEffect(() => {
    dispatch(getTrendingMovies());
  }, []);

  return (
    <div>
      <MoviesCategory movies={trendingMovies} categoryTitle={"Trending"} />
    </div>
  );
};

export default Home;

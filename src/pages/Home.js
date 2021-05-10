import axios from "../store/requests/axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import MoviesCategory from "../components/Movies/MoviesCategory";
import { getTrendingMovies } from "../store/reducers/movieReducer";
import requests from "../store/requests/requests";

const Home = () => {
  const { trendingMovies, loading } = useSelector((state) => state.movies);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setPage(1);
    dispatch(getTrendingMovies());
    setMovies(trendingMovies);
  }, []);

  const handleChange = (event, value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(value);
    getNewMovies(value);
  };

  function getNewMovies(page) {
    axios.get(requests.getNewTrendings(page)).then((fetchedMovies) => {
      console.log(fetchedMovies);
      setMovies(fetchedMovies.data.results);
    });
  }

  return (
    <div>
      {!loading ? (
        <div>
          <MoviesCategory
            movies={movies}
            pages={page}
            handleChange={handleChange}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;

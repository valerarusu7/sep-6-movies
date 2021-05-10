import axios from "../store/requests/axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import MoviesCategory from "../components/Movies/MoviesCategory";
import { getTrendingMovies } from "../store/reducers/movieReducer";
import requests from "../store/requests/requests";
import style from "../styles/Home.module.css";
import Slider from "../components/Slider";

const Home = () => {
  const { trendingMovies, sliderMovies, loading } = useSelector(
    (state) => state.movies
  );
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

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
          <Slider sliderMovies={sliderMovies} style={style} />
          <MoviesCategory
            movies={movies.length != 0 ? movies : trendingMovies}
            pages={page}
            handleChange={handleChange}
            toolbar
            type="Trending"
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;

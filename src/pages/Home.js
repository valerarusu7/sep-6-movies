import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import MoviesCategory from "../components/Movies/MoviesCategory";
import style from "../styles/Home.module.css";
import Slider from "../components/Slider";
import Searchbar from "../components/Search/Searchbar";
import { getMoviesByType } from "../store/reducers/movieReducer";
import { getAdditionalUserInfo } from "../store/reducers/userReducer";

const Home = () => {
  const { movies, sliderMovies, loading } = useSelector(
    (state) => state.movies
  );
  const { user } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(1);
    dispatch(getMoviesByType("trending", 1));
    dispatch(getAdditionalUserInfo(user.uid));
  }, []);

  const handleChange = (event, value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(value);
    // getNewMovies(value);
  };

  // function getNewMovies(page) {
  //   axios.get(requests.getNewTrendings(page)).then((fetchedMovies) => {
  //     console.log(fetchedMovies);
  //     setMovies(fetchedMovies.data.results);
  //   });
  // }

  return (
    <div className={style.home}>
      <Searchbar name="Home" />
      {!loading ? (
        <div>
          <Slider
            sliderMovies={sliderMovies != null || undefined ? sliderMovies : []}
            style={style}
          />
          <MoviesCategory
            movies={movies}
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

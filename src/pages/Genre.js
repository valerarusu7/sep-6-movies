import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import MoviesCategory from "../components/Movies/MoviesCategory";
import Searchbar from "../components/Search/Searchbar";
import { getMoviesByType } from "../store/reducers/movieReducer";
import styles from "../styles/Home.module.css";

const Genre = () => {
  const { movies, loading } = useSelector((state) => state.movies);
  const [page, setPage] = useState();
  const dispatch = useDispatch();
  const { type } = useParams();
  {
    console.log(page);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getMoviesByType(type, page));
  }, [type]);

  const handleChange = (event, value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(value);
    dispatch(getMoviesByType(type, value));
  };

  return (
    <div className={styles.home}>
      <Searchbar name={type.replace("-", " ")} />
      {!loading ? (
        <MoviesCategory
          movies={movies}
          page={page}
          handleChange={handleChange}
          pagination
        />
      ) : (
        <center>
          <Loading />
        </center>
      )}
    </div>
  );
};

export default Genre;

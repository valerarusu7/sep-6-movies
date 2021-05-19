import axios from "../../store/requests/axios";
import React, { useEffect, useState } from "react";
import requests from "../../store/requests/requests";
import styles from "../../styles/Search.module.css";
import SearchItem from "./SearchItem";
import { BsSearch } from "react-icons/bs";
import CompareSearchItem from "../CompareSearchItem";
import { getCompareMovieBy } from "../../store/reducers/movieReducer";
import { useDispatch } from "react-redux";

const Search = ({ width, compare }) => {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  function addCompareItem(movie) {
    let id = movie.id;
    dispatch(getCompareMovieBy({ id }));
    setQuery("");
    setShow(false);
  }

  useEffect(() => {
    setShow(false);
  }, []);

  function setSearch(text) {
    setQuery(text);
    if (query.length > 2) {
      setShow(true);
      searchMovie();
    } else {
      setShow(false);
    }
  }

  function searchMovie() {
    axios.get(requests.querySearch(query)).then((result) => {
      setMovies(result.data.results.splice(0, 5));
    });
  }

  function handleClick() {
    setQuery("");
    setShow(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.icon}>
          <BsSearch size="15px" color="white" />
        </div>
        <input
          value={query}
          placeholder={compare === true ? "Add a movie..." : "Search"}
          className={styles.input}
          style={{ width: width }}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className={styles.results}>
        {show === true ? (
          <div className={styles.results__container}>
            {movies.length != 0
              ? movies.map((movie) => {
                  return (
                    <div key={movie.id}>
                      {compare === true ? (
                        <CompareSearchItem
                          movie={movie}
                          styles={styles}
                          addCompareItem={() => addCompareItem(movie)}
                        />
                      ) : (
                        <SearchItem
                          movie={movie}
                          styles={styles}
                          handleClick={() => handleClick()}
                        />
                      )}
                    </div>
                  );
                })
              : "No results"}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Search;

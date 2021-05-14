import axios from "../../store/requests/axios";
import React, { useEffect, useState } from "react";
import requests from "../../store/requests/requests";
import styles from "../../styles/Search.module.css";
import SearchItem from "./SearchItem";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");

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
        <input
          value={query}
          onChange={(event) => setSearch(event.target.value)}
          style={{ width: "400px" }}
        />
      </div>
      <div className={styles.results}>
        {show === true ? (
          <div className={styles.results__container}>
            {movies.length != 0
              ? movies.map((movie) => {
                  return (
                    <SearchItem
                      movie={movie}
                      styles={styles}
                      handleClick={() => handleClick()}
                    />
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
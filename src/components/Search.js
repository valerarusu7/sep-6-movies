import axios from "../store/requests/axios";
import React from "react";
import requests from "../store/requests/requests";
import styles from "../styles/Search.module.css";

const Search = ({}) => {
  function searchMovie(text) {
    axios.get(requests.querySearch(text)).then((result) => {
      console.log(result.data.results);
    });
  }

  return (
    <div className={styles.container}>
      <input onChange={(event) => searchMovie(event.target.value)} />
    </div>
  );
};

export default Search;

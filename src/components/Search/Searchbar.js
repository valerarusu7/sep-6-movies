import React, { useEffect } from "react";
import styles from "../../styles/Search.module.css";
import Search from "./Search";

const Searchbar = ({ name }) => {
  useEffect(() => {
    name.replace("-", "");
  }, [name]);

  return (
    <div className={styles.search__bar}>
      <div className={styles.search__bar__left}>{name}</div>
      <div className={styles.search__bar__right}>
        <Search width="400px" />
      </div>
    </div>
  );
};

export default Searchbar;

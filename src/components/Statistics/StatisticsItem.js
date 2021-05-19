import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/Statistics.module.css";

const StatisticsItem = ({ value, compare }) => {
  const { compareMovies } = useSelector((state) => state.movies);

  const [color, setColor] = useState("#fff");

  useEffect(() => {
    if (compare) {
      if (compareMovies.length > 1) {
        Math.max.apply(
          Math,
          compareMovies.map((movie) => {
            
          })
        );
      }
    }
  }, []);

  return (
    <div className={styles.stat__container} style={{ color: color }}>
      {value}
    </div>
  );
};

export default StatisticsItem;

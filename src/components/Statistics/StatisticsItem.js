import React from "react";
import styles from "../../styles/Statistics.module.css";
import tmdb_logo from "../../assets/tmdb_logo.jpg";
import { useSelector } from "react-redux";

const StatisticsItem = ({ value, color, icon, id }) => {
  const { compareMovies } = useSelector((state) => state.movies);

  return (
    <div
      className={styles.stat__container}
      style={{
        color: compareMovies.length != 1 ? color : "#fff",
        fontWeight: color === "green" ? 600 : 400,
      }}
    >
      <div> {value}</div>
      {icon ? (
        <a
          style={{
            marginLeft: 10,
            cursor: "pointer",
            placeItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
          href={`https://www.themoviedb.org/movie/${id}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={tmdb_logo}
            alt="TMDB"
            width={40}
            style={{ borderRadius: 10 }}
          />
        </a>
      ) : null}
    </div>
  );
};

export default StatisticsItem;

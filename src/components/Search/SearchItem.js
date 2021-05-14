import React from "react";
import { Link } from "react-router-dom";
import no_poster from "../../assets/no_poster.png";

const SearchItem = ({ movie, handleClick, styles }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      key={movie.id}
      className={styles.result}
      onClick={handleClick}
    >
      <img
        src={
          movie.poster_path != null
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : no_poster
        }
        alt={movie.title}
        width={50}
      />
      <div className={styles.result__info}>
        <div>
          {movie.title
            ? movie.title
            : movie.name
            ? movie.name
            : movie.original_name}
        </div>
        <div>
          {movie.release_date
            ? movie.release_date.substring(0, 4)
            : movie.first_air_date
            ? movie.first_air_date.substring(0, 4)
            : "Unknown"}
        </div>
      </div>
    </Link>
  );
};

export default SearchItem;

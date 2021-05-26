import React from "react";
import { Link } from "react-router-dom";
import no_poster from "../../assets/no_poster.png";
import { AiOutlineStar } from "react-icons/ai";

const MovieItem = ({ movie, styles }) => {
  return (
    <Link className={styles.poster} to={`/movie/${movie.id}`} key={movie.id}>
      <div className={styles.movies}>
        <div className={styles.rating}>
          <div className={styles.rating__content}>
            <AiOutlineStar size={20} style={{ marginRight: 5 }} />
            {movie.vote_average}
          </div>
        </div>
        <img
          className={styles.movies}
          src={
            movie.poster_path != null
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : no_poster
          }
          alt={movie.title}
        />
      </div>
    </Link>
  );
};

export default MovieItem;

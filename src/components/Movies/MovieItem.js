import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import no_poster from "../../assets/no_poster.png";
import { AiOutlineStar } from "react-icons/ai";
import { genres } from "../../genres";

const MovieItem = ({ movie, styles }) => {
  const [firstGenre, setFirstGenre] = useState();
  const [secondGenre, setSecondGenre] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    genres.map((genre) => {
      if (movie.genre_ids[0] === genre.id) {
        setFirstGenre(genre.genre);
      }
      if (movie.genre_ids[1] === genre.id) {
        setSecondGenre(genre.genre);
      }
    });
  }, []);

  return (
    <Link
      className={styles.poster}
      to={`/movie/${movie.id}`}
      key={movie.id}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className={styles.rating}>
        <div className={styles.rating__content}>
          <AiOutlineStar size={20} style={{ marginRight: 5 }} />
          {movie.vote_average}
        </div>
      </div>
      <img
        src={
          movie.poster_path != null
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : no_poster
        }
        alt={movie.title}
        width={260}
        height={380}
      />
      <div>
        {movie.title
          ? movie.title
          : movie.name
          ? movie.name
          : movie.original_name}
      </div>
      <div className={styles.movie__info}>
        <div>{`${firstGenre}${
          secondGenre != undefined ? `/${secondGenre}` : ""
        }`}</div>
      </div>
      {show === true ? (
        <div className={styles.movie__info}>
          {movie.release_date
            ? movie.release_date.substring(0, 4)
            : movie.first_air_date
            ? movie.first_air_date.substring(0, 4)
            : "Unknown"}
        </div>
      ) : null}
    </Link>
  );
};

export default MovieItem;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { genres } from "../../genres";
import MovieReleaseDate from "./MovieReleaseDate";
import MovieTitle from "./MovieTitle";
import MovieImage from "./MovieImage";

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
      <MovieImage movie={movie} width={260} height={380} />
      <MovieTitle movie={movie} />
      <div className={styles.movie__info}>
        <div>{`${firstGenre}${
          secondGenre != undefined ? `/${secondGenre}` : ""
        }`}</div>
      </div>
      {show === true ? <MovieReleaseDate movie={movie} /> : null}
    </Link>
  );
};

export default MovieItem;

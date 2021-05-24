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
      <img className={styles.movies}
        src={
          movie.poster_path != null
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : no_poster
        }
        alt={movie.title}
     
      />


      
    </Link>
  );
};

export default MovieItem;
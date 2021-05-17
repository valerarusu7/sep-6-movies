import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addFavoriteMovie } from "../firebase/utils";
import {
  getMovieById,
  getMovieCredits,
  getMovieVideo,
} from "../store/reducers/movieReducer";
import { store } from "../store/store";
import styles from "../styles/Movie.module.css";
import VerticalList from "../components/VerticalList";
import { AiOutlineStar, AiFillDownCircle } from "react-icons/ai";
import { usePalette } from "react-palette";
import MovieDescription from "../components/Movies/MovieDescription";

const Movie = () => {
  const { user } = useSelector((state) => state.auth);
  const [isFavorite, setIsFavorite] = useState(false);
  const { movie, favoriteMovies, movieCredits, movieVideo } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    isFavoriteMovie();
    dispatch(getMovieById({ id }));
    dispatch(getMovieCredits({ id }));
    dispatch(getMovieVideo({ id }));
  }, []);

  function addMovie() {
    let data = [...store.getState().movies.favoriteMovies];
    let size = favoriteMovies.length;
    let index = 1;
    if (size !== 0) {
      index = size + 1;
    }
    let favoriteMovie = {
      index: index,
      id: movie.id,
      poster_path: movie.poster_path,
      title: movie.title,
      overview: movie.overview,
    };
    data.push(favoriteMovie);
    addFavoriteMovie(user, movie, index);
    setIsFavorite(true);
  }

  function isFavoriteMovie() {
    if (favoriteMovies.length !== 0) {
      favoriteMovies.map((movie) => {
        if (movie.id === id) {
          setIsFavorite(true);
        }
      });
    }
  }

  const { data, loading, error } = usePalette(
    movie != null
      ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
      : null
  );

  const gradientStyle = {
    background: `linear-gradient(90deg,${data.vibrant} 0%,${data.vibrant} 50%,transparent)`,
  };

  const voteAverageStyle = {
    background: data.vibrant,
  };

  const trailerStyle = {
    border: `3px ${data.darkMuted} solid`,
    background: data.darkMuted,
  };

  return (
    <div className={styles.movie}>
      {loading != true ? (
        <div>
          {movie != undefined || null ? (
            <div className={styles.movieStyle}>
              <div style={gradientStyle} id={styles.gradient} />
              <img
                className={styles.img}
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.id}
              />
              <div className={styles.voteAverage} style={voteAverageStyle}>
                <div>
                  <AiOutlineStar size={20} />
                  <h2>{movie.vote_average}</h2>
                  <h6>/10</h6>
                </div>
                <div>
                  <p>{movie.vote_count}</p>
                </div>
              </div>
              <div id={styles.content}>
                <MovieDescription movie={movie} data={data} styles={styles} />

                {isFavorite ? (
                  <div>Favorite</div>
                ) : (
                  <button
                    className={styles.favouriteButton}
                    onClick={() => addMovie()}
                  >
                    Add to favorites
                  </button>
                )}
                {movieVideo != null || undefined ? (
                  <button
                    className={styles.trailerButton}
                    type="button"
                    style={trailerStyle}
                    onClick={() =>
                      window.open(
                        `https://www.youtube.com/watch?v=${movieVideo.key}`,
                        "_blank"
                      )
                    }
                  >
                    Watch trailer
                  </button>
                ) : (
                  <button
                    className={styles.trailerButton}
                    style={trailerStyle}
                    type="button"
                    disabled
                  >
                    No available trailer
                  </button>
                )}
              </div>
              <AiFillDownCircle size="100" id={styles.circle} color="white" />
              <div id={styles.castAndCrew}>
                <p>lol</p>
                <p>lol</p>
                <p>lol</p>
                <p>lol</p>
                <p>lol</p>
                <p>lol</p>
                <p>lol</p>
                <p>lol</p>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Movie;

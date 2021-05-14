import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addFavoriteMovie } from "../firebase/utils";
import { getMovieById, getMovieCredits } from "../store/reducers/movieReducer";
import { store } from "../store/store";
import styles from "../styles/Movie.module.css";
import VerticalList from "../components/VerticalList";
import { AiOutlineStar } from "react-icons/ai";
import { usePalette } from "react-palette";

const Movie = () => {
  const { user } = useSelector((state) => state.auth);
  const [isFavorite, setIsFavorite] = useState(false);
  const { movie, favoriteMovies, movieCredits } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    isFavoriteMovie();
    dispatch(getMovieById({ id }));
    dispatch(getMovieCredits({ id }));
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
    `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
  );

  const gradientStyle = {
    background: `linear-gradient(90deg,${data.vibrant} 0%,${data.vibrant} 50%,transparent)`,
  };

  const voteAverageStyle = {
    background: data.vibrant,
  };

  const genreStyle = {
    background: data.darkVibrant,
  };

  const trailerStyle = {
    border: `3px ${data.darkMuted} solid`,
    background: data.darkMuted,
  };

  return (
    <div>
      <div>
        {movie != undefined || null ? (
          <div className={styles.movieStyle} style={{ marginTop: -50 }}>
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
              <h1>{movie.title}</h1>
              <div className={styles.movieGenre}>
                {movie.genres.map((genre) => {
                  return (
                    <span style={genreStyle} key={genre.id}>
                      {genre.name}
                    </span>
                  );
                })}
              </div>
              <div className={styles.otherInfo}>
                <p>
                  <strong>Original language: </strong>
                  {movie.original_language}
                </p>
                <p>
                  <strong>Release date: </strong>
                  {movie.release_date}
                </p>
                <p>
                  <strong>Status: </strong>
                  {movie.status}
                </p>
                <p>
                  <strong>Budget: </strong>
                  {movie.budget.toLocaleString()} $
                </p>
                <p>
                  <strong>Revenue: </strong>
                  {movie.revenue.toLocaleString()} $
                </p>
              </div>
              <p>{movie.overview}</p>
              {/* <VerticalList list={movieCredits.crew} /> */}

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
              <button
                className={styles.trailerButton}
                style={trailerStyle}
                onClick={() => addMovie()}
              >
                Watch trailer
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Movie;

import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addFavoriteMovie, removeFavoriteMovie } from "../firebase/utils";
import { getMovieById } from "../store/reducers/movieReducer";
import { moviesSetFavoriteMovies } from "../store/reducers/userReducer";
import { store } from "../store/store";
import styles from "../styles/Movie.module.css";
import movieItemStyles from "../styles/MoviesCategory.module.css";
import { AiOutlineStar, AiFillDownCircle } from "react-icons/ai";
import { usePalette } from "react-palette";
import MovieDescription from "../components/Movies/MovieDescription";
import Loading from "../components/Loading";
import MovieCredits from "../components/Movies/MovieCredits";
import MovieItem from "../components/Movies/MovieItem";
import MovieVideo from "../components/Movies/MovieVideo";

const Movie = () => {
  const { user } = useSelector((state) => state.auth);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeContent, setActiveContent] = useState(1);
  const { movie } = useSelector((state) => state.movies);
  const { favoriteMovies } = useSelector((state) => state.user);
  const movieLoading = useSelector((state) => state.movies.loading);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    isFavoriteMovie();
    dispatch(getMovieById({ id }));
  }, []);

  function addMovie() {
    let data = [...store.getState().auth.favoriteMovies];
    let size = favoriteMovies.length;
    let index = 1;
    if (size !== 0) {
      index = size + 1;
    }
    let favoriteMovie = {
      index: index,
      id: movie.details.id,
      poster_path: movie.details.poster_path,
      title: movie.details.title,
      overview: movie.details.overview,
    };
    data.push(favoriteMovie);
    addFavoriteMovie(user, movie.details, index);
    dispatch(moviesSetFavoriteMovies(data));
    setIsFavorite(true);
  }

  function removeMovie() {
    let data = [...store.getState().auth.favoriteMovies];
    console.log(data);
    var filteredData = data.filter((x) => x.id !== movie.details.id);
    removeFavoriteMovie(user, movie.details);
    dispatch(moviesSetFavoriteMovies(filteredData));
    setIsFavorite(false);
  }

  function isFavoriteMovie() {
    if (favoriteMovies.length !== 0) {
      favoriteMovies.map((movie) => {
        //Dont put three equals otherwise it wont recognize ID
        if (movie.id == id) {
          setIsFavorite(true);
        }
      });
    }
  }

  const { data, loading, error } = usePalette(
    movie != null
      ? `https://image.tmdb.org/t/p/original/${movie.details.backdrop_path}`
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

  const switchContent = () => {
    let component = null;
    switch (activeContent) {
      case 1:
        component = <MovieCredits styles={styles} credits={movie.credits} />;
        break;
      case 2:
        component = (
          <div
            className={movieItemStyles.container}
            style={{
              display: "inline-flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {movie.similar_movies !== null || undefined ? (
              movie.similar_movies.map((similarMovie) => (
                <MovieItem
                  movie={similarMovie}
                  styles={movieItemStyles}
                  key={similarMovie.id}
                />
              ))
            ) : (
              <h1>No available data</h1>
            )}
          </div>
        );
        break;
      case 3:
        component = (
          <div className={styles.movieVideo}>
            {movie.videos.results.map((movieVideo) => {
              return <MovieVideo video={movieVideo} />;
            })}
          </div>
        );
        break;
      case 4:
        component = <div />;
        break;
      default:
        component = <div />;
    }
    return component;
  };

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  const setActiveId = (id) => {
    setActiveContent(id);
    executeScroll();
  };

  return (
    <div className={styles.movie}>
      {movieLoading != true ? (
        <div>
          {movie != undefined || null ? (
            <div className={styles.movieStyle}>
              <div style={gradientStyle} id={styles.gradient} />
              <img
                className={styles.img}
                src={`https://image.tmdb.org/t/p/original/${movie.details.backdrop_path}`}
                alt={movie.details.id}
              />
              <div className={styles.voteAverage} style={voteAverageStyle}>
                <div>
                  <AiOutlineStar size={20} />
                  <h2>{movie.details.vote_average}</h2>
                  <h6>/10</h6>
                </div>
                <div>
                  <p>{movie.details.vote_count}</p>
                </div>
              </div>
              <div id={styles.content}>
                <MovieDescription
                  movie={movie.details}
                  data={data}
                  styles={styles}
                />

                {isFavorite ? (
                  <button
                    className={styles.favouriteButton}
                    onClick={() => removeMovie()}
                  >
                    Remove from favorites
                  </button>
                ) : (
                  <button
                    className={styles.unfavouriteButton}
                    onClick={() => addMovie()}
                  >
                    Add to favorites
                  </button>
                )}
                {movie.videos.results.length !== 0 ? (
                  <button
                    className={styles.trailerButton}
                    type="button"
                    style={trailerStyle}
                    onClick={() =>
                      window.open(
                        `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`,
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

              <AiFillDownCircle
                size="100"
                id={styles.circle}
                color="white"
                onClick={executeScroll}
                className={styles.fillDownCircle}
              />

              <div id={styles.otherInfo}>
                <ul id={styles.otherInfoChooser} ref={myRef}>
                  <li
                    onClick={() => setActiveId(1)}
                    style={
                      activeContent === 1
                        ? { fontWeight: "normal" }
                        : { fontWeight: "lighter" }
                    }
                  >
                    Cast & Crew
                  </li>
                  <li
                    onClick={() => setActiveId(2)}
                    style={
                      activeContent === 2
                        ? { fontWeight: "normal" }
                        : { fontWeight: "lighter" }
                    }
                  >
                    Similar movies
                  </li>
                  <li
                    onClick={() => setActiveId(3)}
                    style={
                      activeContent === 3
                        ? { fontWeight: "normal" }
                        : { fontWeight: "lighter" }
                    }
                  >
                    Media
                  </li>
                  <li
                    onClick={() => setActiveId(4)}
                    style={
                      activeContent === 4
                        ? { fontWeight: "normal" }
                        : { fontWeight: "lighter" }
                    }
                  >
                    Reviews
                  </li>
                </ul>
                {switchContent()}
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Movie;

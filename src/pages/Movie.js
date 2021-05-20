import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addFavoriteMovie } from "../firebase/utils";
import { getMovieById } from "../store/reducers/movieReducer";
import { store } from "../store/store";
import styles from "../styles/Movie.module.css";
import { AiOutlineStar, AiFillDownCircle } from "react-icons/ai";
import { usePalette } from "react-palette";
import MovieDescription from "../components/Movies/MovieDescription";
import Loading from "../components/Loading";
import MovieCredits from "../components/MovieCredits";

const Movie = () => {
  const { user } = useSelector((state) => state.auth);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeContent, setActiveContent] = useState(1);
  const { movie, favoriteMovies } = useSelector((state) => state.movies);
  const movieLoading = useSelector((state) => state.movies.loading);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    isFavoriteMovie();
    dispatch(getMovieById({ id }));
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
      id: movie.details.id,
      poster_path: movie.details.poster_path,
      title: movie.details.title,
      overview: movie.details.overview,
    };
    data.push(favoriteMovie);
    addFavoriteMovie(user, movie.details, index);
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

  let component = null;
  switch (activeContent) {
    case 1:
      component = <MovieCredits styles={styles} credits={movie.credits} />;
      break;
    case 2:
      component = <div />;
      break;
    case 3:
      component = <div />;
      break;
    case 4:
      component = <div />;
      break;
    default:
      component = <div />;
  }

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

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
                  <div>Favorite</div>
                ) : (
                  <button
                    className={styles.favouriteButton}
                    onClick={() => addMovie()}
                  >
                    Add to favorites
                  </button>
                )}
                {movie.trailer != null || undefined ? (
                  <button
                    className={styles.trailerButton}
                    type="button"
                    style={trailerStyle}
                    onClick={() =>
                      window.open(
                        `https://www.youtube.com/watch?v=${movie.trailer.key}`,
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
              />
              <div id={styles.otherInfo}>
                <ul id={styles.otherInfoChooser} ref={myRef}>
                  <li
                    onClick={() => setActiveContent(1)}
                    style={
                      activeContent === 1
                        ? { fontWeight: "bold" }
                        : { fontWeight: "normal" }
                    }
                  >
                    Cast & Crew
                  </li>
                  <li
                    onClick={() => setActiveContent(2)}
                    style={
                      activeContent === 2
                        ? { fontWeight: "bold" }
                        : { fontWeight: "normal" }
                    }
                  >
                    Similar movies
                  </li>
                  <li
                    onClick={() => setActiveContent(3)}
                    style={
                      activeContent === 3
                        ? { fontWeight: "bold" }
                        : { fontWeight: "normal" }
                    }
                  >
                    Media
                  </li>
                  <li
                    onClick={() => setActiveContent(4)}
                    style={
                      activeContent === 4
                        ? { fontWeight: "bold" }
                        : { fontWeight: "normal" }
                    }
                  >
                    Reviews
                  </li>
                </ul>
                {component}
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div
          style={{
            placeItems: "center",
            display: "flex",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Movie;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addFavoriteMovie } from "../firebase/utils";
import {
  getMovieById,
  moviesSetIsFavorite,
} from "../store/reducers/movieReducer";
import { store } from "../store/store";

const Movie = () => {
  const { user } = useSelector((state) => state.auth);
  const [isFavorite, setIsFavorite] = useState(false);
  const { movie, favoriteMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    isFavoriteMovie();
    dispatch(getMovieById(id));
  }, []);

  function addMovie() {
    dispatch(moviesSetIsFavorite(true));
    addFavoriteMovie(user, movie);
    let data = [...store.getState().movies.favoriteMovies];
    data.push(movie);
    setIsFavorite(true);
  }

  function isFavoriteMovie() {
    if (favoriteMovies.length != 0) {
      favoriteMovies.map((movie) => {
        if (movie.id == id) {
          setIsFavorite(true);
        }
      });
    }
  }

  return (
    <div>
      <div>
        {movie != undefined || null ? (
          <div>
            <div>{movie.title + " " + movie.id}</div>
            {isFavorite ? (
              <div>Favorite</div>
            ) : (
              <button onClick={() => addMovie()}>Add to favorites</button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Movie;

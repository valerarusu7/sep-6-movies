import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import FavoriteMovie from "../components/FavoriteMovie";
import { updateOrderMovie } from "../firebase/utils";
import {
  getFavoriteMovies,
  moviesSetFavoriteMovies,
} from "../store/reducers/movieReducer";
import styles from "../styles/FavoriteMovie.module.css";

const Favorite = () => {
  const { user } = useSelector((state) => state.auth);
  const { favoriteMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteMovies(user.uid));
  }, []);

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    updateMovieOrder(result);
    return result;
  };

  function updateMovieOrder(result) {
    let reorderedMovies = [];
    result.map((reorderedMovie, key) => {
      let index = key + 1;
      let movie = {
        index: index,
        id: reorderedMovie.id,
        title: reorderedMovie.title,
        overview: reorderedMovie.overview,
        poster_path: reorderedMovie.poster_path,
      };
      updateOrderMovie(user, movie);
      reorderedMovies.push(movie);
    });
    dispatch(moviesSetFavoriteMovies(reorderedMovies));
  }

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newMovies = reorder(
      favoriteMovies,
      result.source.index,
      result.destination.index
    );

    dispatch(moviesSetFavoriteMovies(newMovies));
  }

  return (
    <center className={styles.favorite__movies__container}>
      <div className={styles.header}>Favorite Movies List</div>
      <div className={styles.header__table}>
        <div className={styles.container__left}>
          <div>Rank</div>
        </div>
        <div className={styles.container__center}>
          <div style={{ margin: 15 }}>Poster</div>
          <p className={styles.title}>Title</p>
          <p className={styles.title}>Year</p>
          <p className={styles.title}>Rating</p>
        </div>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {favoriteMovies !== [] || undefined
                ? favoriteMovies.map((item, index) => (
                    <FavoriteMovie item={item} index={index} key={item.id} />
                  ))
                : null}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </center>
  );
};

export default Favorite;

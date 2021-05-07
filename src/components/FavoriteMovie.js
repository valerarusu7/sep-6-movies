import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "../styles/FavoriteMovie.module.css";
import { MdDragHandle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store/store";
import { removeFavoriteMovie } from "../firebase/utils";
import { moviesSetFavoriteMovies } from "../store/reducers/movieReducer";

const FavoriteMovie = ({ item, index }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function removeMovie() {
    removeFavoriteMovie(user, item);
    let state = store.getState();
    let newMovies = [...state.movies.favoriteMovies];
    newMovies.splice(item.id, 1);
    dispatch(moviesSetFavoriteMovies(newMovies));
  }

  return (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided) => (
        <div
          onClick={() => console.log(item.id)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={styles.container}>
            <MdDragHandle size={25} />
            <div className={styles.position}> {index + 1}</div>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
              className={styles.img}
            />
            <div> {item.title}</div>
            <button onClick={() => removeMovie()}>Remove</button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default FavoriteMovie;

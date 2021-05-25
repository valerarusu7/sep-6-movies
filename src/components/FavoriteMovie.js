import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "../styles/FavoriteMovie.module.css";
import { MdDragHandle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store/store";
import { removeFavoriteMovie } from "../firebase/utils";
import { moviesSetFavoriteMovies } from "../store/reducers/userReducer";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

const FavoriteMovie = ({ item, index }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function removeMovie() {
    removeFavoriteMovie(user, item);
    let state = store.getState();
    let newMovies = [...state.user.favoriteMovies];
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
          <div>
            <div className={styles.container}>
              <Link to={`/movie/${item.id}`} className={styles.container__left}>
                <MdDragHandle size={30} color="white" />
                <div className={styles.position}> {index + 1}</div>
              </Link>
              <Link
                to={`/movie/${item.id}`}
                className={styles.container__center}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  className={styles.img}
                />
                <p className={styles.title}>{item.title}</p>
                <p className={styles.title}>{item.year}</p>
                <p className={styles.title}>{item.vote_average}</p>
              </Link>
              <div className={styles.container__right}>
                <MdDeleteForever
                  onClick={() => removeMovie()}
                  color="#8c0303"
                  size={30}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default FavoriteMovie;

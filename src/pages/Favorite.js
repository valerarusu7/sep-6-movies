import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import FavoriteMovie from "../components/FavoriteMovie";
import {
  getNetflixMovies,
  moviesSetNetflixMovies,
} from "../store/reducers/movieReducer";

const Favorite = () => {
  const { netflixOriginalsMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNetflixMovies());
  }, []);

  // a little function to help us with reordering the result
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newMovies = reorder(
      netflixOriginalsMovies,
      result.source.index,
      result.destination.index
    );

    dispatch(moviesSetNetflixMovies(newMovies));
  }

  return (
    <center
      style={{
        width: "70%",
        margin: "auto",
        display: "block",
      }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {netflixOriginalsMovies !== []
                ? netflixOriginalsMovies.map((item, index) => (
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

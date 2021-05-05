import React, { useEffect } from "react";
import styles from "../../styles/MoviesCategory.module.css";
import Carousel from "react-multi-carousel";
import { useDispatch } from "react-redux";
import "react-multi-carousel/lib/styles.css";
import { getMovieById } from "../../store/reducers/movieReducer";

const MoviesCategory = ({ movies, categoryTitle }) => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 3, // optional, default to 1.
    },
  };

  return (
    <div className={styles.row}>
      <h2>{categoryTitle}</h2>
      <Carousel
        responsive={responsive}
        showDots={true}
        swipeable={false}
        draggable={false}
      >
        {movies !== null ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              className={styles.poster}
              onClick={dispatch(getMovieById(movie.id))}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={260}
                height={380}
              />
            </div>
          ))
        ) : (
          <div></div>
        )}
      </Carousel>
    </div>
  );
};

export default MoviesCategory;

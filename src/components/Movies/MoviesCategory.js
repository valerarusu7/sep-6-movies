import React, { useEffect } from "react";
import styles from "../../styles/MoviesCategory.module.css";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

const MoviesCategory = ({ movies, categoryTitle }) => {
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
            <Link
              key={movie.id}
              className={styles.poster}
              to={`/movie/${movie.id}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={260}
                height={380}
              />
            </Link>
          ))
        ) : (
          <div></div>
        )}
      </Carousel>
    </div>
  );
};

export default MoviesCategory;

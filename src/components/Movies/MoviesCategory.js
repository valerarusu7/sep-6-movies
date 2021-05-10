import { makeStyles } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React from "react";
import styles from "../../styles/MoviesCategory.module.css";
import MovieItem from "./MovieItem";
import MoviesToolbar from "./MoviesToolbar";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },
}));

const MoviesCategory = ({
  movies,
  toolbar,
  type,
  results,
  handleChange,
  page,
  pagination
}) => {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <div className={toolbar ? styles.movies__with__tolbar : styles.movies}>
        {toolbar ? (
          <MoviesToolbar styles={styles} type={type} results={results} />
        ) : null}
        {movies !== null || undefined
          ? movies.map((movie) => (
              <MovieItem movie={movie} styles={styles} key={movie.id} />
            ))
          : null}
      </div>
      {pagination ? (
        <div className={styles.pagination}>
          <Pagination
            count={50}
            page={page}
            onChange={handleChange}
            size="large"
            color="primary"
            variant="outlined"
            classes={{ ul: classes.ul }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default MoviesCategory;

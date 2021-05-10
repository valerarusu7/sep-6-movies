import React from "react";
import { useSelector } from "react-redux";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MoviesToolbar = ({ styles, type, results }) => {
  const { showResults } = useSelector((state) => state.movies);

  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbar__left}>
        <div className={styles.show__text}>{type}</div>
        <div className={styles.results}>
          {results ? `${showResults} series` : null}
        </div>
      </div>
      <div className={styles.all}>
        {parseInt(showResults) > 100 ? (
          <div className={styles.button__container}>
            <div className={styles.all__button}>ALL</div>
            <div className={styles.all__button_direction}>
              <IoIosArrowBack size={20} color="white" />
            </div>
            <div className={styles.all__button_direction}>
              <IoIosArrowForward size={20} color="white" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MoviesToolbar;

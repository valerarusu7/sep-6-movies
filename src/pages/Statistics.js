import React from "react";
import styles from "../styles/Statistics.module.css";
import { RiCloseCircleFill } from "react-icons/ri";
import Search from "../components/Search/Search";
import MovieImage from "../components/Movies/MovieImage";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { removeCompareMovie } from "../store/reducers/movieReducer";
import StatisticsItem from "../components/Statistics/StatisticsItem";

const Statistics = ({}) => {
  const { compareMovies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>Compare Movies</div>
        <div>Compare up to 3 movies</div>
      </div>
      <div className={styles.inner__container}>
        <div className={styles.input__container}>
          <div className={styles.input}>
            <Search compare={true} />
          </div>
        </div>
        <div className={styles.movies__container}>
          {compareMovies.map((movie) => {
            return (
              <div className={styles.movie} key={movie.details.id}>
                <div>
                  <div className={styles.img}>
                    <RiCloseCircleFill
                      color="#ed2939"
                      size={30}
                      className={styles.delete}
                      onClick={() =>
                        dispatch(removeCompareMovie(movie.details.id))
                      }
                    />
                    <MovieImage
                      movie={movie.details}
                      width={260}
                      height={380}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.outer__container}>
        {compareMovies.length != 0 ? (
          <div className={styles.headers}>
            <div className={styles.headers}>
              <div className={styles.stat__container}>Title</div>
              <div className={styles.stat__container}>Release Date</div>
              <div className={styles.stat__container}>Status</div>
              <div className={styles.stat__container}>Production Country</div>
              <div className={styles.stat__container}>Runtime</div>
              <div className={styles.stat__container}>Budget</div>
              <div className={styles.stat__container}>Revenue</div>
              <div className={styles.stat__container}>Rating</div>
              <div className={styles.stat__container}>Vote Count</div>
            </div>
          </div>
        ) : null}
        <div className={styles.movies__statistics}>
          {compareMovies.map((movie) => {
            return (
              <div className={styles.stats} key={movie.details.id}>
                <StatisticsItem value={movie.details.title} />
                <StatisticsItem
                  value={moment(movie.details.release_date).format("LL")}
                />
                <StatisticsItem value={movie.details.status} />
                <StatisticsItem
                  value={movie.details.production_countries[0].name}
                />
                <StatisticsItem value={`${movie.details.runtime} min.`} />
                <StatisticsItem
                  value={`${movie.details.budget.toLocaleString()} $`}
                />
                <StatisticsItem
                  value={`${movie.details.revenue.toLocaleString()} $`}
                />
                <StatisticsItem value={movie.details.vote_average} />
                <StatisticsItem value={movie.details.vote_count} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Statistics;

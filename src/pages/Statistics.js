import React from "react";
import styles from "../styles/Statistics.module.css";
import { RiCloseCircleFill } from "react-icons/ri";
import Search from "../components/Search/Search";
import MovieImage from "../components/Movies/MovieImage";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  addCompareMovieById,
  removeCompareMovie,
} from "../store/reducers/movieReducer";
import StatisticsItem from "../components/Statistics/StatisticsItem";
import Loading from "../components/Loading";

const Statistics = ({}) => {
  const { compareMovies, loading } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  function removeMovie(id) {
    let newMovies = [...compareMovies.filter((movie) => movie.id !== id)];
    // Instead of adding a new endpoint for remove we are reusing the same one but sending the id = 0 which is handled on the backend
    let removeId = 0;
    let data = { movies: newMovies };
    dispatch(addCompareMovieById(removeId, data));
    dispatch(removeCompareMovie(id));
  }

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
              <div className={styles.movie} key={movie.id}>
                {loading !== true ? (
                  <div className={styles.img}>
                    <RiCloseCircleFill
                      color="#ed2939"
                      size={30}
                      className={styles.delete}
                      onClick={() => removeMovie(movie.id)}
                    />
                    <MovieImage movie={movie} width={260} height={380} />
                  </div>
                ) : (
                  <div>
                    <Loading />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.outer__container}>
        {compareMovies.length != 0 ? (
          <div className={styles.headers}>
            <div className={styles.stat__container}>Title</div>
            <div className={styles.stat__container}>Release Date</div>
            <div className={styles.stat__container}>Original Language</div>
            <div className={styles.stat__container}>Status</div>
            <div className={styles.stat__container}>Production Country</div>
            <div className={styles.stat__container}>Runtime</div>
            <div className={styles.stat__container}>Budget</div>
            <div className={styles.stat__container}>Revenue</div>
            <div className={styles.stat__container}>Rating</div>
            <div className={styles.stat__container}>Vote Count</div>
          </div>
        ) : null}
        <div className={styles.movies__statistics}>
          {compareMovies.map((movie) => {
            return (
              <div className={styles.stats} key={movie.id}>
                {loading != true ? (
                  <div style={{ width: "100%" }}>
                    <StatisticsItem value={movie.title} />
                    <StatisticsItem
                      value={moment(movie.release_date).format("LL")}
                    />
                    <StatisticsItem
                      value={new Intl.DisplayNames(["en"], {
                        type: "language",
                      }).of(movie.original_language)}
                    />
                    <StatisticsItem value={movie.status} />
                    <StatisticsItem
                      value={movie.production_countries[0].name}
                    />
                    <StatisticsItem
                      value={`${Math.floor(movie.runtime / 60)}h ${
                        movie.runtime % 60
                      }m`}
                      color={movie.highest_runtime_color}
                    />
                    <StatisticsItem
                      value={
                        movie.budget != 0
                          ? `${movie.budget.toLocaleString()} $`
                          : "-"
                      }
                      color={movie.highest_budget_color}
                    />
                    <StatisticsItem
                      value={`${movie.revenue.toLocaleString()} $`}
                      color={movie.highest_revenue_color}
                    />
                    <StatisticsItem
                      value={movie.vote_average}
                      color={movie.highest_rating_color}
                      icon
                      id={movie.id}
                    />
                    <StatisticsItem
                      value={movie.vote_count}
                      color={movie.highest_vote_count_color}
                      icon
                      id={movie.id}
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Statistics;

import React from "react";
import MovieItem from "../Person/MovieItemForPerson";

const TopMovies = ({ person, styles }) => {
  return (
    <div>
      <section className={styles.secondRow}>
        <div className={styles.top}>
          <strong> Top 5 Movies</strong>
        </div>
      </section>
      <div className={styles.topmovies}>
        {person.top_5 !== null || undefined
          ? person.top_5.map((movie) => (
              <MovieItem movie={movie} styles={styles} key={movie.id} />
            ))
          : null}
      </div>
    </div>
  );
};

export default TopMovies;

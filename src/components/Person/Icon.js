import React from "react";

const Icon = ({ person, styles }) => {
  return (
    <section id="original_header" className={styles.inner}>
      <div className={styles.poster_wrapper}>
        <div className={styles.image_content}>
          <img
            className={styles.profile}
            src={`https://image.tmdb.org/t/p/original/${person.details.profile_path}`}
            alt={person.details.id}
          />
        </div>
      </div>
    </section>
  );
};

export default Icon;

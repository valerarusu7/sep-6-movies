import React from "react";

const Biography = ({ person, styles }) => {
  return (
    <div className={styles.poster_wrapper}>
      <div className={styles.poster_wrapper}>
        <section>
          <div className={styles.title}>
            <h2 className={styles.facts}>{person.details.name}</h2>
          </div>
        </section>
        <section>
          <div className={styles.biography}>
            <p>
              <strong> Biography</strong>
              {person.details.biography}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Biography;

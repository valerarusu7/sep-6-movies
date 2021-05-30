import React from "react";
import HorizontalList from "../HorizontalList";

const MovieCredits = ({ styles, credits }) => {
  return (
    <div>
      <div className={styles.groupList}>
        <h2 style={{ fontWeight: "normal" }}>Crew</h2>
        <HorizontalList list={credits.crew} styles={styles} />
      </div>
      <div className={styles.groupList} style={{ marginTop: "50px" }}>
        <h2 style={{ fontWeight: "normal" }}>Cast</h2>
        <HorizontalList list={credits.cast} styles={styles} />
      </div>
    </div>
  );
};

export default MovieCredits;

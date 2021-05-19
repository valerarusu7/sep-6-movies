import React from "react";
import VerticalList from "./VerticalList";

const MovieCredits = ({ styles, credits }) => {
  return (
    <div>
      <div className={styles.groupList}>
        <h2>Crew</h2>
        <VerticalList list={credits.crew} styles={styles} />
      </div>
      <div className={styles.groupList} style={{ marginTop: "50px" }}>
        <h2>Cast</h2>
        <VerticalList list={credits.cast} styles={styles} />
      </div>
    </div>
  );
};

export default MovieCredits;

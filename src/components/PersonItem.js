import React from "react";

const PersonItem = ({ styles, element }) => {
  return (
    <div key={element.id} className={styles.personItem}>
      <img
        className={styles.smallImg}
        src={`https://image.tmdb.org/t/p/original/${element.profile_path}`}
        alt={element.name}
      />
      <div className={styles.personContent}>{element.name}</div>
    </div>
  );
};

export default PersonItem;

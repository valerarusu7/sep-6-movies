import React from "react";
import no_img from "../assets/img_not_available.png";
import { Link } from "react-router-dom";

const PersonItem = ({ styles, element }) => {
  return (
    <div key={element.id} className={styles.personItem}>
      <Link to={`/person/${element.id}`}>
        <img
          className={styles.personImg}
          src={
            element.profile_path != null
              ? `https://image.tmdb.org/t/p/original/${element.profile_path}`
              : no_img
          }
          alt={element.name}
        />
      </Link>
      <div className={styles.personContent}>
        <strong>{element.name}</strong>
        {element.character ? element.character : element.job}
      </div>
    </div>
  );
};

export default PersonItem;

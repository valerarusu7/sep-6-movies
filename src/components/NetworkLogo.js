import React from "react";

const NetworkLogo = ({ styles, image, companies }) => {
  return (
    <div className={companies ? styles.logo__company : styles.logo}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${image}`}
        style={{ width: 70, height: 70, objectFit: "contain" }}
        alt="aa"
      />
    </div>
  );
};

export default NetworkLogo;

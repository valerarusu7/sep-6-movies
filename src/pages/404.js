import React from "react";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 style={{ fontSize: "5em" }}>404</h1>
      <h4 style={{ fontSize: "2em" }}>OPPS! PAGE NOT FOUND</h4>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <br />
      <button
        className={styles.returnButton}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/";
        }}
      >
        RETURN HOME
      </button>
    </div>
  );
};

export default NotFound;

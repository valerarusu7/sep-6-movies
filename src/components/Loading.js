import React from "react";
import styles from "../styles/Loading.module.css";
import { Pulse } from "better-react-spinkit";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Pulse size={60} color="white" />
    </div>
  );
};

export default Loading;

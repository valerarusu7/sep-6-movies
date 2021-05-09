import React from "react";
import { Link } from "react-router-dom";
import { networkCompanies } from "../data";
import styles from "../styles/Networks.module.css";

const Networks = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.networks}>
        {networkCompanies.map((network) => {
          return (
            <Link
              key={network.id}
              className={styles.network}
              to={`/network/${network.id}`}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${network.logo_path}`}
                alt={network.name}
                width={350}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Networks;

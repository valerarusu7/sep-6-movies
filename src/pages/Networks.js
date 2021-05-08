import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Networks.module.css";

const Networks = ({}) => {
  let networkCompanies = [
    {
      id: 2087,
      name: "Discovery Channel",
      logo_path: "/8qkdZlbrTSVfkJ73DjOBrwYtMSC.png",
    },
    {
      id: 213,
      name: "Netflix",
      logo_path: "/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
    },
    {
      id: 43,
      name: "National Geographic",
      logo_path: "/q9rPBG1rHbUjII1Qn98VG2v7cFa.png",
    },
    {
      id: 2739,
      name: "Disney+",
      logo_path: "/gJ8VX6JSu3ciXHuC2dDGAo2lvwM.png",
    },
    { id: 453, name: "Hulu", logo_path: "/pqUTCleNUiTLAVlelGxUgWn1ELh.png" },
    {
      id: 1062,
      name: "HBO Nordic",
      logo_path: "/sFWkLyP2ps3yUOajuqaUEWxpSWP.png",
    },
    { id: 18, name: "ABC", logo_path: "/kMvN5R8g6L0SY5r9YZw9foYGQr0.png" },
    { id: 6, name: "NBC", logo_path: "/o3OedEP0f9mfZr33jz2BfXOUK5.png" },
    {
      id: 1024,
      name: "Amazon",
      logo_path: "/ifhbNuuVnlwYy5oXA5VIb2YR8AZ.png",
    },
  ];

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

import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import MoviesCategory from "../components/Movies/MoviesCategory";
import { networkCompanies } from "../data";
import { getNetworkMovies } from "../store/reducers/movieReducer";
import styles from "../styles/Networks.module.css";
const Network = ({}) => {
  const { networkMovies } = useSelector((state) => state.movies);
  const [image, setImage] = useState();
  const [name, setName] = useState();

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    networkCompanies.map((company) => {
      if (id == company.id) {
        setImage(company.logo_path);
        setName(company.name);
      }
    });
    dispatch(getNetworkMovies(id));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.networks}>
        <center>
          <div className={styles.logo}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${image}`}
              style={{ width: 70, height: 70, objectFit: "contain" }}
              alt="aa"
            />
          </div>
          <div className={styles.company__name}>{name}</div>
          <div className={styles.company__types}>
            <div>Movies</div>
            <div>TV Shows</div>
          </div>
        </center>

        <div>
          <MoviesCategory movies={networkMovies} />
        </div>
      </div>
    </div>
  );
};

export default Network;

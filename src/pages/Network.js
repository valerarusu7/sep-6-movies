import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import MoviesCategory from "../components/Movies/MoviesCategory";
import { networkCompanies } from "../data";
import { getNetworkMovies } from "../store/reducers/movieReducer";
import styles from "../styles/Networks.module.css";
import Loading from "../components/Loading";
import NetworkLogo from "../components/NetworkLogo";
import { NavLink } from "react-router-dom";

const Network = ({}) => {
  const { networkTVShows, loading } = useSelector((state) => state.movies);
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    networkCompanies.map((company) => {
      if (id == company.id) {
        setImage(company.logo_path);
        setName(company.name);
        setDescription(company.description);
      }
    });
    dispatch(getNetworkMovies(id));
    dispatch(getNetworkMovies(id, "movie"));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.networks__item}>
        <center>
          <NetworkLogo image={image} styles={styles} />
          <div className={styles.company__name}>{name}</div>
          <div className={styles.company__description}>{description}</div>
        </center>
        <div>
          {!loading ? (
            <div>
              <MoviesCategory
                movies={networkTVShows.slice(0, 18)}
                toolbar
                type="TV Shows"
                results
              />
              <div className={styles.related__channels}>
                <div className={styles.related__channels__text}>
                  Related Channels
                </div>
                <div className={styles.company__logos}>
                  {networkCompanies
                    .filter((company) => company.id != id)
                    .map((company) => {
                      return (
                        <NavLink to={`/network/${company.id}`}>
                          <NetworkLogo
                            image={company.logo_path}
                            styles={styles}
                            companies
                          />
                        </NavLink>
                      );
                    })}
                </div>
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Network;

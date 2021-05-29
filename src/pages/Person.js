import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPersonById } from "../store/reducers/personReducer.js";
import styles from "../styles/Person.module.css";
import PersonInfo from "../components/Person/PersonInfo";
import Biography from "../components/Person/Biography";
import Icon from "../components/Person/Icon";
import TopMovies from "../components/Person/TopMovies";
import AllMovies from "../components/Person/ListOfAllMovies";


const Person = () => {
  const { person } = useSelector((state) => state.person);
  const personLoading = useSelector((state) => state.person.loading);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPersonById({ id }));
  }, []);

  return (
    <div className={styles.page}>
      {personLoading !== true ? (
        <div className={styles.column_wrapper}>
          <div className={styles.content_wrapper}>
            <div className={styles.grey_column}>
              {person != undefined || null ? (
                <div className={styles.grey_column}>
                  <Icon person={person} styles={styles} />
                  <PersonInfo person={person} styles={styles} />
                </div>
              ) : null}
            </div>
            <div>
              {person != undefined || null ? (
                <div className={styles.column}>
                  <Biography person={person} styles={styles} />
                  <TopMovies person={person} styles={styles} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
              <div className={styles.list}>
    <h2>Timeline of movies</h2></div>
      <AllMovies person={person} styles={styles} />
    </div>
  );
};

export default Person;

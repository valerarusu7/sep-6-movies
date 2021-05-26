import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getActorById } from "../store/reducers/personReducer.js";
import styles from "../styles/Person.module.css";
import MovieItem from "./Actors/MovieItemForActor";

const Actor = () => {
  const { actor } = useSelector((state) => state.person);
  const actorLoading = useSelector((state) => state.person.loading);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getActorById({ id }));
  }, []);

  return (
    <div className={styles.page}>
      {actorLoading !== true ? (
        <div className={styles.column_wrapper}>
          <div className={styles.content_wrapper}>
            <div className={styles.grey_column}>
              {actor != undefined || null ? (
                <div className={styles.grey_column}>
                  <section id="original_header" className={styles.inner}>
                    <div className={styles.poster_wrapper}>
                      <div className={styles.image_content}>
                        <img
                          className={styles.profile}
                          src={`https://image.tmdb.org/t/p/original/${actor.details.profile_path}`}
                          alt={actor.details.id}
                        />
                      </div>
                    </div>
                  </section>
                  <div className={styles.secondRow}>
                    <section className={styles.facts}>
                      <h3>
                        <bdi>Personal Info</bdi>
                      </h3>
                      <section>
                        <p>
                          <strong>
                            <bdi>Known For: </bdi>
                          </strong>
                          {actor.details.known_for_department}
                        </p>
                        <p>
                          <strong>
                            <bdi>Gender: </bdi>
                          </strong>
                          {parseInt(actor.details.gender) === 1
                            ? "Female"
                            : "Male"}
                        </p>
                        <p class="full">
                          <strong>
                            <bdi>Birthday: </bdi>
                          </strong>
                          {actor.details.birthday}
                        </p>
                        <p class="full">
                          <strong>
                            <bdi>Place of Birth: </bdi>
                          </strong>
                          {actor.details.place_of_birth}
                        </p>
                      </section>
                    </section>
                  </div>
                </div>
              ) : null}
            </div>
            <div>
              {actor != undefined || null ? (
                <div className={styles.column}>
                  <div className={styles.poster_wrapper}>
                    <section>
                      <div className={styles.title}>
                        <h2 className={styles.facts}>{actor.details.name}</h2>
                      </div>
                    </section>
                    <section>
                      <div className={styles.biography}>
                        <p>
                          <strong> Biography</strong>
                          {actor.details.biography}
                        </p>
                      </div>
                    </section>
                  </div>
                  <section className={styles.secondRow}>
                    <div className={styles.top}>
                      <strong> Top 5 Movies</strong>
                    </div>
                  </section>
                  <div className={styles.topmovies}>
                    {actor.top_5 !== null || undefined
                      ? actor.top_5.map((movie) => (
                          <MovieItem
                            movie={movie}
                            styles={styles}
                            key={movie.id}
                          />
                        ))
                      : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Actor;

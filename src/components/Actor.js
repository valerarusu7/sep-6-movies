import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getActorById } from "../store/reducers/personReducer.js";
import styles from "../styles/Person.module.css";

const Actor = () => {
  const { actor} = useSelector(
    (state) => state.person,
  );
  const actorLoading = useSelector((state) => state.person.loading);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
   dispatch(getActorById({id}));
  }, []);


{console.log(actor)}
 
  return (
    <div className={styles.page}>
        {actorLoading !=true ? (
            <div>
                {actor != undefined || null ? (
                <div className={styles.right}>
                    
                    <img className={styles.img}
                     src={`https://image.tmdb.org/t/p/original/${actor.details.profile_path}`}
                     alt={actor.details.id}/>
                                  <div className={styles.left}>{actor.details.biography}</div>
                </div>
                ): null}
      
            </div>) : null}
            
            {console.log(actor)}
</div>
  );
};


export default Actor;

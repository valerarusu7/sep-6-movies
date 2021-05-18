import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getActorById } from "../store/reducers/personReducer.js";
import styles from "../styles/Movie.module.css";

const Actor = () => {
  const { actor} = useSelector(
    (state) => state.person,
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
   dispatch(getActorById({id}));
  }, []);


{console.log(actor)}
 
  return (
    <div>
      <div style={{ backgroundColor: "#44014C", width: "300px", minHeight: "200px"}}>{actor != null ? actor.name : 'SUKA' }</div>
      <p>WORK PLZ</p>
</div>
  );
};

export default Actor;

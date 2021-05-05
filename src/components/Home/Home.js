import { Avatar } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/reducers/authReducer";

const Home = ({}) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div>
      <div>Home Screen</div>
      <div>Home Screen</div>
    </div>
  );
};

export default Home;

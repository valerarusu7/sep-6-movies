import React from "react";
import styles from "../../styles/Navbar.module.css";
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/reducers/authReducer";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return user != null ? (
    <div className={styles.nav}>
      <Avatar src={user.photoURL} alt={user.displayName} />
      <button onClick={() => dispatch(signOut())}>Sign out</button>
    </div>
  ) : null;
};

export default Navbar;

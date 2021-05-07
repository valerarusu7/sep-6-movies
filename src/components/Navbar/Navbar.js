import React from "react";
import styles from "../../styles/Navbar.module.css";
import linkStyles from "../../styles/Navbar.module.css";
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/reducers/authReducer";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  return user != null ? (
    <div className={styles.nav}>
      <div>
        <Link to="/" className={linkStyles.link}>
          Home
        </Link>
      </div>
      <div className={styles.nav__right}>
        <Link to="/favorite-movies" className={linkStyles.link}>
          Favorite Movies
        </Link>
        <Avatar src={user.photoURL} alt={user.displayName} />

        <button onClick={() => dispatch(signOut())}>Sign out</button>
      </div>
    </div>
  ) : null;
};

export default Navbar;

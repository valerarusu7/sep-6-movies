import React from "react";
import styles from "../../styles/Navbar.module.css";
import linkStyles from "../../styles/Navbar.module.css";
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/reducers/authReducer";
import { Link, NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { moviesReset } from "../../store/reducers/movieReducer";
import Search from "../Search/Search";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function logout() {
    dispatch(signOut());
    dispatch(moviesReset());
  }
  return user != null ? (
    <div className={styles.nav}>
      <div className={styles.nav__links}>
        <div className={styles.nav__avatar}>
          <Avatar
            src={user.photoURL}
            alt={user.displayName}
            style={{ marginRight: "10px" }}
          />
          <div>{user.displayName}</div>
        </div>
        <div className={styles.nav__genres}>
          <NavbarLink to="/" exact page="Home" />
          <NavbarLink to="/genre/top-rated" page="Top Rated" />
          <NavbarLink to="/genre/comedy" page="Comedy" />
          <NavbarLink to="/genre/action" page="Action" />
          <NavbarLink to="/genre/horror" page="Horror" />
          <NavbarLink to="/genre/romance" page="Romance" />
          <NavbarLink to="/genre/drama" page="Drama" />
          <NavbarLink to="/genre/fantasy" page="Fantasy" />
          <NavbarLink to="/genre/mystery" page="Mystery" />
          <NavbarLink to="/genre/documentaries" page="Documentaries" />
        </div>
        <NavbarLink to="/networks" page="Networks" />
        <NavbarLink to="/favorite-movies" page="Favorite Movies" />
        <Link to="/" className={styles.link} onClick={() => logout()}>
          Logout
        </Link>
      </div>
    </div>
  ) : null;
};

export default Navbar;

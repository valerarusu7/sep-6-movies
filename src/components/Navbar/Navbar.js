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
import Search from "../Search";
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
      <div>
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
        <NavbarLink to="/networks" page="Networks" />
      </div>
      <Search />

      <div className={styles.nav__right}>
        <NavLink to="/favorite-movies" className={linkStyles.link__favorite}>
          <AiFillStar size={30} />
        </NavLink>
        <Avatar
          src={user.photoURL}
          alt={user.displayName}
          style={{ marginRight: "10px" }}
        />
        <NavLink to="/" className={linkStyles.link__favorite}>
          <FiLogOut
            size={20}
            onClick={() => logout()}
            className={styles.button}
          />
        </NavLink>
      </div>
    </div>
  ) : null;
};

export default Navbar;

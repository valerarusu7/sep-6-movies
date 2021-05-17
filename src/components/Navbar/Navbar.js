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
import { AiFillHome } from "react-icons/ai";
import { CgComedyCentral } from "react-icons/cg";
import { GiDramaMasks } from "react-icons/gi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { IoMdPodium } from "react-icons/io";

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
          <NavbarLink to="/" exact page="Home" Icon={AiFillHome} />
          <NavbarLink
            to="/genre/top-rated"
            page="Top Rated"
            Icon={IoMdPodium}
          />
          <NavbarLink to="/genre/comedy" page="Comedy" Icon={CgComedyCentral} />
          <NavbarLink to="/genre/action" page="Action" />
          <NavbarLink to="/genre/horror" page="Horror" />
          <NavbarLink to="/genre/romance" page="Romance" />
          <NavbarLink to="/genre/drama" page="Drama" Icon={GiDramaMasks} />
          <NavbarLink to="/genre/fantasy" page="Fantasy" />
          <NavbarLink to="/genre/mystery" page="Mystery" />
          <NavbarLink to="/genre/documentaries" page="Documentaries" />
        </div>
        <NavbarLink to="/networks" page="Networks" />
        <NavbarLink to="/favorite-movies" page="Favorite Movies" />
        <Link to="/" className={styles.link} onClick={() => logout()}>
          <RiLogoutBoxRFill />
          Logout
        </Link>
      </div>
    </div>
  ) : null;
};

export default Navbar;

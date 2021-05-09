import React from "react";
import styles from "../../styles/Navbar.module.css";
import linkStyles from "../../styles/Navbar.module.css";
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/reducers/authReducer";
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { moviesReset } from "../../store/reducers/movieReducer";
import Search from "../Search";

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
        <NavLink to="/" className={linkStyles.link}>
          Home
        </NavLink>
        <NavLink
          to="/genre/top-rated"
          className={linkStyles.link}
          activeClassName={linkStyles.active__link}
        >
          Top Rated
        </NavLink>
        <NavLink to="/genre/comedy" className={linkStyles.link}>
          Comedy
        </NavLink>
        <NavLink to="/genre/action" className={linkStyles.link}>
          Action
        </NavLink>
        <NavLink to="/genre/horror" className={linkStyles.link}>
          Horror
        </NavLink>
        <NavLink to="/genre/romance" className={linkStyles.link}>
          Romance
        </NavLink>
        <NavLink to="/genre/drama" className={linkStyles.link}>
          Drama
        </NavLink>
        <NavLink to="/genre/fantasy" className={linkStyles.link}>
          Fantasy
        </NavLink>
        <NavLink to="/genre/mystery" className={linkStyles.link}>
          Mystery
        </NavLink>
        <NavLink to="/genre/documentaries" className={linkStyles.link}>
          Documentaries
        </NavLink>
        <NavLink to="/networks" className={linkStyles.link}>
          Networks
        </NavLink>
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
        <FiLogOut
          size={20}
          onClick={() => logout()}
          className={styles.button}
        />
      </div>
    </div>
  ) : null;
};

export default Navbar;

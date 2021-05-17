import React from "react";
import { NavLink } from "react-router-dom";
import linkStyles from "../../styles/Navbar.module.css";

const NavbarLink = ({ to, page, exact, Icon }) => {
  return (
    <NavLink
      exact={exact}
      to={to}
      className={linkStyles.link}
      activeClassName={linkStyles.active__link}
    >
      {Icon && <Icon />}
      {page}
    </NavLink>
  );
};

export default NavbarLink;

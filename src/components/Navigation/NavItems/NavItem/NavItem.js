import React from "react";
import { NavLink } from "react-router-dom";

// stylesheets
import styles from "./NavItem.module.css";

const NavItem = props => {
  return (
    <li>
      <NavLink to={props.link} exact activeClassName={styles.active}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavItem;

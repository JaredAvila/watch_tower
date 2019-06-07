import React from "react";

// components
import NavItem from "./NavItem/NavItem";

// stylesheets
import styles from "./NavItems.module.css";

const NavItems = props => {
  return (
    <ul>
      <NavItem link="/">Home</NavItem>
      <NavItem link="/movies">Movies</NavItem>
      <NavItem link="/tv">TV</NavItem>
    </ul>
  );
};

export default NavItems;

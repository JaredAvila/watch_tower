import React from "react";
import Logo from "../../Logo/Logo";

// components
import NavItems from "../NavItems/NavItems";

// stylesheets
import styles from "./Toolbar.module.css";

const Toolbar = props => {
  return (
    <header className={styles.Toolbar}>
      <div className={styles.Logo}>
        <Logo clicked={props.toggleDrawer} />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavItems />
      </nav>
    </header>
  );
};

export default Toolbar;

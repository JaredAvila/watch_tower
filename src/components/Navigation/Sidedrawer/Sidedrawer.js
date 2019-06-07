import React, { Fragment } from "react";

// components
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";

// stylesheets
import styles from "./Sidedrawer.module.css";

const Sidedrawer = props => {
  let classes = [styles.SideDrawer, styles.Close];
  if (props.open) {
    classes = [styles.SideDrawer, styles.Open];
  }

  return (
    <Fragment>
      <div className={classes.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default Sidedrawer;

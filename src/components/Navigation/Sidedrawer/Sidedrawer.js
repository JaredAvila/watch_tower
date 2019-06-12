import React, { Fragment } from "react";

// components
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import BackDrop from "../../UI/BackDrop/BackDrop";

// stylesheets
import styles from "./Sidedrawer.module.css";

const Sidedrawer = props => {
  let classes = [styles.SideDrawer, styles.Close];
  if (props.open) {
    classes = [styles.SideDrawer, styles.Open];
  }

  return (
    <Fragment>
      <BackDrop show={props.open} clicked={props.close} />
      <div className={classes.join(" ")}>
        <div className={styles.Logo}>
          <Logo open={props.open} />
          <h1>The Watch Tower</h1>
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default Sidedrawer;

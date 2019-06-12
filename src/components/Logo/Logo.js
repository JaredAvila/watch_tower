import React, { Fragment } from "react";
import watchTowerLogo from "../../assets/img/watch_tower_logo.png";

import styles from "./Logo.module.css";

const Logo = props => {
  const menuStyles = [styles.Menu, "fas", "fa-bars"];
  return (
    <div className={styles.Logo}>
      <div className={styles.Right}>
        <img src={watchTowerLogo} alt="Watch Tower" />
        <h1>the WATCH TOWER</h1>
      </div>
      {props.open ? (
        ""
      ) : (
        <Fragment>
          <form className={styles.Form}>
            <input type="text" placeholder="Search" />
            <button type="button">
              <i className="fas fa-search" />
            </button>
          </form>
          <i className={menuStyles.join(" ")} onClick={props.clicked} />
        </Fragment>
      )}
    </div>
  );
};

export default Logo;

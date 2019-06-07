import React from "react";
import watchTowerLogo from "../../assets/img/watch_tower_logo.png";

import styles from "./Logo.module.css";

const Logo = props => {
  return (
    <div className={styles.Logo}>
      <div className={styles.Right}>
        <img src={watchTowerLogo} alt="Watch Tower" />
        <h1>the WATCH TOWER</h1>
      </div>
      {props.open ? "" : <i onClick={props.clicked} className="fas fa-bars" />}
    </div>
  );
};

export default Logo;

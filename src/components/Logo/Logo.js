import React from "react";
import watchTowerLogo from "../../assets/img/watch_tower_logo.png";

import styles from "./Logo.module.css";

const Logo = props => (
  <div className={styles.Logo}>
    <img src={watchTowerLogo} alt="Watch Tower" />
    <h1>the WATCH TOWER</h1>
  </div>
);

export default Logo;

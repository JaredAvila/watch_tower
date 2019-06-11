import React, { Fragment } from "react";

import styles from "./Button.module.css";

const Button = props => {
  return (
    <Fragment>
      <button className={styles.Button} onClick={props.click}>
        {props.children}
      </button>
    </Fragment>
  );
};

export default Button;

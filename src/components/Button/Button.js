import React, { Fragment } from "react";

const Button = props => {
  return (
    <Fragment>
      <button onClick={props.click}>{props.children}</button>
    </Fragment>
  );
};

export default Button;

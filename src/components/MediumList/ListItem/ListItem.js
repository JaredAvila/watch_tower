import React from "react";

import * as styles from "./ListItem.module.css";

const ListItem = props => {
  return (
    <div className={styles.ListItem}>
      <h1>list item</h1>
      <p>{props.media.data.title}</p>
    </div>
  );
};

export default ListItem;

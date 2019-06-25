import React from "react";

import ListItem from "./ListItem/ListItem";

import * as styles from "./MediumList.module.css";

const MediumList = props => {
  return (
    <div className={styles.MediumList}>
      <h1>{props.title}</h1>
      {props.medium
        ? props.medium.map(media => {
            console.log(media);
            return <ListItem media={media} />;
          })
        : null}
    </div>
  );
};

export default MediumList;
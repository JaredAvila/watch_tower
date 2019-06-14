import React from "react";
import { formatTitle } from "../hoc/formatTitle";

import Media from "../Media/Media";

import styles from "./MediumContainer.module.css";

const MediumContainer = props => {
  const mediumArray = [];
  props.medium.forEach(media => {
    let newMedia = formatTitle(media);
    if (mediumArray.length < 4) {
      mediumArray.push(newMedia);
    }
  });
  return (
    <div className={styles.MediumContainer}>
      <h1 className={styles.Title}>{props.title}</h1>
      <div className={styles.Medium}>
        {mediumArray.map(media => {
          return media.data.title ? (
            <Media key={media.data.title} media={media} />
          ) : (
            <Media key={media.data.name} media={media} />
          );
        })}
      </div>
    </div>
  );
};

export default MediumContainer;

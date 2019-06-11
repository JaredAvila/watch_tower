import React from "react";

import Media from "../Media/Media";

import styles from "./MediumContainer.module.css";

const MediumContainer = props => {
  const mediumArray = [];
  props.medium.forEach(media => {
    // makes sure the title isn't too long - UI
    let shortTitle = "";
    let newTitle = "";
    // if title is too long is cuts and add "..." to the end
    if (media.data.title) {
      if (media.data.title.length > 24) {
        shortTitle = media.data.title.split("");
        newTitle = shortTitle.slice(0, 15).join("") + "...";
      } else {
        newTitle = media.data.title;
      }
      // constructs new movie object with new title
      let newMedia = {
        ...media,
        data: {
          ...media.data,
          title: newTitle
        }
      };
      if (mediumArray.length < 4) {
        mediumArray.push(newMedia);
      }
    } else if (media.data.name) {
      if (media.data.name.length > 24) {
        shortTitle = media.data.name.split("");
        newTitle = shortTitle.slice(0, 15).join("") + "...";
      } else {
        newTitle = media.data.name;
      }
      // constructs new movie object with new title
      let newMedia = {
        ...media,
        data: {
          ...media.data,
          name: newTitle
        }
      };
      if (mediumArray.length < 4) {
        mediumArray.push(newMedia);
      }
    }

    // adds to array with only 4 of the most popular movies in it
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

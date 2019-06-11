import React from "react";

import Media from "../Media/Media";

import styles from "./TopRatedTv.module.css";

const TopRatedTv = props => {
  const showArray = [];
  props.shows.forEach(show => {
    // makes sure the title isn't too long - UI
    let shortTitle = "";
    let newTitle = "";
    // if title is too long is cuts and add "..." to the end
    if (show.movieData.name.length > 24) {
      shortTitle = show.movieData.name.split("");
      newTitle = shortTitle.slice(0, 15).join("") + "...";
    } else {
      newTitle = show.movieData.name;
    }
    // constructs new movie object with new title
    let newShow = {
      ...show,
      movieData: {
        ...show.movieData,
        name: newTitle
      }
    };
    if (showArray.length < 4) {
      showArray.push(newShow);
    }
  });
  return (
    <div className={styles.TopRatedTv}>
      <h2 className={styles.Title}>Top Rated TV Shows</h2>
      <div className={styles.Shows}>
        {showArray.map(show => {
          return <Media key={show.movieData.id} movie={show} />;
        })}
      </div>
    </div>
  );
};

export default TopRatedTv;

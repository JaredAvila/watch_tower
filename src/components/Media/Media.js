import React from "react";

import Button from "../Button/Button";

import styles from "./Media.module.css";

const Media = props => {
  return (
    <div className={styles.Movie}>
      <img src={props.movie.imgUrl} alt="" />
      {props.movie.movieData.title ? (
        <h2 className={styles.Title}>{props.movie.movieData.title}</h2>
      ) : (
        <h2 className={styles.Title}>{props.movie.movieData.name}</h2>
      )}
      <p>
        <em>Releasd: </em>
        {props.movie.movieData.release_date}
      </p>
      <p className={styles.botMarg}>
        Average Rating: {props.movie.movieData.vote_average}
      </p>
      <Button>View More</Button>
    </div>
  );
};

export default Media;

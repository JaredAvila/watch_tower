import React from "react";

import Movie from "../Movie/Movie";

import styles from "./PopularMovies.module.css";

const PopularMovies = props => {
  return (
    <div className={styles.PopularMovies}>
      <h1 className={styles.Title}>Popular Movies</h1>
      <div className={styles.Movies}>
        <Movie movie={props.movies[0]} />
        <Movie movie={props.movies[1]} />
        <Movie movie={props.movies[2]} />
        <Movie movie={props.movies[3]} />
      </div>
    </div>
  );
};

export default PopularMovies;

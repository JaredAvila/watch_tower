import React from "react";

import Movie from "../Movie/Movie";

import styles from "./PopularMovies.module.css";

const PopularMovies = props => {
  const popMovies = [];
  props.movies.forEach(movie => {
    if (popMovies.length < 8) {
      popMovies.push(movie);
    }
  });
  return (
    <div className={styles.PopularMovies}>
      <h1 className={styles.Title}>Popular Movies</h1>
      <div className={styles.Movies}>
        {popMovies.map(movie => {
          return <Movie key={movie.movieData.title} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default PopularMovies;

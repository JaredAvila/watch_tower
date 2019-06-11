import React from "react";

import Media from "../Media/Media";

import styles from "./PopularMovies.module.css";

const PopularMovies = props => {
  const popMovies = [];
  props.movies.forEach(movie => {
    // makes sure the title isn't too long - UI
    let shortTitle = "";
    let newTitle = "";
    // if title is too long is cuts and add "..." to the end
    if (movie.movieData.title.length > 24) {
      shortTitle = movie.movieData.title.split("");
      newTitle = shortTitle.slice(0, 15).join("") + "...";
    } else {
      newTitle = movie.movieData.title;
    }
    // constructs new movie object with new title
    let newMovie = {
      ...movie,
      movieData: {
        ...movie.movieData,
        title: newTitle
      }
    };
    // adds to array with only 4 of the most popular movies in it
    if (popMovies.length < 4) {
      popMovies.push(newMovie);
    }
  });
  return (
    <div className={styles.PopularMovies}>
      <h1 className={styles.Title}>Popular Movies</h1>
      <div className={styles.Movies}>
        {popMovies.map(movie => {
          return <Media key={movie.movieData.title} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default PopularMovies;

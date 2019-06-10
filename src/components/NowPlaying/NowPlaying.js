import React, { Fragment } from "react";

import styles from "./NowPlaying.module.css";

const PopMovies = props => {
  let markup = null;
  if (props.movie) {
    markup = (
      <Fragment>
        <h1 className={styles.Headline}>In theaters now</h1>
        <div className={styles.Movies}>
          <div className={styles.Main}>
            <img src={props.movie.imgUrl} alt="Main attraction" />
          </div>
          <div className={styles.MovieInfo}>
            <div>
              <h1>{props.movie.movieData.title}</h1>
              <h3>Avgerage Rating: {props.movie.movieData.vote_average}</h3>
              <h3>Total votes: {props.movie.movieData.vote_count}</h3>
            </div>
            {!props.movie.liked ? (
              <i
                className="far fa-heart"
                title="Add to likes list"
                onClick={props.likeToggle}
              />
            ) : (
              <i
                className="fas fa-heart"
                title="Remove from likes list"
                onClick={props.likeToggle}
              />
            )}
          </div>
          <button className={styles.Prev} onClick={props.prev}>
            <i className="fas fa-chevron-left" />
          </button>
          <button className={styles.Next} onClick={props.next}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </Fragment>
    );
  }

  return markup;
};

export default PopMovies;

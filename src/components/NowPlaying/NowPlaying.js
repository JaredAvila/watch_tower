import React from "react";

import styles from "./NowPlaying.module.css";

const NowPlaying = props => {
  let markup = null;
  if (props.movie) {
    markup = (
      <div className={styles.Container}>
        <h1 className={styles.Headline}>In theaters now</h1>
        <div className={styles.Movies}>
          <div className={styles.Main}>
            <img src={props.movie.imgUrl} alt="Main attraction" />
          </div>
          <div className={styles.MovieInfo}>
            <div>
              <h1>{props.movie.data.title}</h1>
              <h3>Avgerage Rating: {props.movie.data.vote_average}</h3>
              <h3>Total votes: {props.movie.data.vote_count}</h3>
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
          <button
            className={styles.Prev}
            onClick={() => {
              console.log("stuff and things");
              props.prev();
            }}
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button className={styles.Next} onClick={props.next}>
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }

  return markup;
};

export default NowPlaying;

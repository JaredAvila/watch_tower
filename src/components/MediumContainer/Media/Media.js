import React, { Fragment } from "react";

import Button from "../../Button/Button";

import styles from "./Media.module.css";

const Media = props => {
  return (
    <div className={styles.Movie}>
      <img src={props.media.imgUrl} alt="" />
      {props.media.data.title ? (
        <Fragment>
          <h2 className={styles.Title}>{props.media.data.title}</h2>
          <p>
            <em>Release Date: </em>
            {props.media.data.release_date}
          </p>
        </Fragment>
      ) : (
        <Fragment>
          <h2 className={styles.Title}>{props.media.data.name}</h2>
          <p>
            <em>Original Air Date: </em> {props.media.data.first_air_date}
          </p>
        </Fragment>
      )}

      <p className={styles.botMarg}>
        Average Rating: {props.media.data.vote_average}
      </p>
      <Button>View More</Button>
    </div>
  );
};

export default Media;

import React from "react";

import Button from "../../../components/Button/Button";

import * as styles from "./ListItem.module.css";

const ListItem = props => {
  const onClickHandler = () => {
    console.log("clicked");
  };

  return (
    <div className={styles.ListItem}>
      <img className={styles.Img} src={props.media.imgUrl} alt="" />
      <div className={styles.MovieInfo}>
        <p className={styles.Title}>{props.media.data.title}</p>
        <div className={styles.Info}>
          <p>
            Release Date: {props.media.data.release_date} | Average Rating:{" "}
            {props.media.data.vote_average}
          </p>
        </div>
        <Button className={styles.Btn} click={onClickHandler}>
          See more
        </Button>
      </div>
    </div>
  );
};

export default ListItem;

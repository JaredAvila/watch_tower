import React, { Component } from "react";
import styles from "./Landing.module.css";
import axios from "axios";

import NowPlaying from "../../components/NowPlaying/NowPlaying";

class Landing extends Component {
  state = {
    nowPlaying: null,
    nowPlayingIndex: 0,
    upComing: [],
    airingToday: [],
    popularTV: [],
    searchRes: []
  };

  componentDidMount = () => {
    //get nowPlaying movie data
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=e950813aa61709dfde6ecca87c8e2279&language=en-US&page=1"
      )
      .then(res => {
        const nowPlayingArray = [];
        const url = "http://image.tmdb.org/t/p/original";
        res.data.results.forEach(movie => {
          nowPlayingArray.push({
            movieData: movie,
            imgUrl: url + movie.backdrop_path,

            //TODO: get like for each movie
            liked: false
          });
        });
        this.setState({ nowPlaying: nowPlayingArray });
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };

  nowPlayingSliderNextHandler = () => {
    // 1. only switch if there is a next photo
    if (this.state.nowPlayingIndex < this.state.nowPlaying.length - 1) {
      //2. update current img index
      const newIndex = this.state.nowPlayingIndex + 1;
      this.setState({ nowPlayingIndex: newIndex });
    }
  };
  nowPlayingSliderPrevHandler = () => {
    // 1. only switch if there is a prev photo
    if (this.state.nowPlayingIndex > 0) {
      // 2. update current img index
      const newIndex = this.state.nowPlayingIndex - 1;
      this.setState({ nowPlayingIndex: newIndex });
    }
  };

  toggleLikeList = () => {
    //TODO: add/remove from likes list.
    // re-route to login if not logged in
    console.log("clicked");
  };

  render() {
    return (
      <div className={styles.Landing}>
        {this.state.nowPlaying ? (
          <NowPlaying
            movie={this.state.nowPlaying[this.state.nowPlayingIndex]}
            next={this.nowPlayingSliderNextHandler}
            prev={this.nowPlayingSliderPrevHandler}
            likeToggle={this.toggleLikeList}
          />
        ) : null}
      </div>
    );
  }
}

export default Landing;

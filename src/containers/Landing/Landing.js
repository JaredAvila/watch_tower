import React, { Component } from "react";
import styles from "./Landing.module.css";
import { connect } from "react-redux";

import NowPlaying from "../../components/NowPlaying/NowPlaying";
import * as actions from "../../store/actions";

class Landing extends Component {
  state = {
    autoSlide: true
  };

  timer = null;

  componentDidMount() {
    this.props.onFetchNowPlaying();
  }

  componentDidUpdate() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.nowPlayingSliderNextHandler();
    }, 6000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  nowPlayingSliderNextHandler = () => {
    this.props.onIncNowPlaying(this.props.currentIndex);
  };
  nowPlayingSliderPrevHandler = () => {
    this.props.onDecNowPlaying(this.props.currentIndex);
  };

  toggleLikeList = () => {
    //TODO: add/remove from likes list.
    // re-route to login if not logged in
    this.setState({ autoSlide: false });
    console.log("clicked");
  };

  render() {
    return (
      <div className={styles.Landing}>
        {this.props.nowPlaying ? (
          <NowPlaying
            movie={this.props.nowPlaying[this.props.currentIndex]}
            next={this.nowPlayingSliderNextHandler}
            prev={this.nowPlayingSliderPrevHandler}
            likeToggle={this.toggleLikeList}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nowPlaying: state.nowPlaying.nowPlaying,
    currentIndex: state.nowPlaying.nowPlayingIndex
  };
};

const mapDispatchToProps = disptach => {
  return {
    onFetchNowPlaying: () => disptach(actions.fetchNowPlaying()),
    onIncNowPlaying: index => disptach(actions.incrementIndex(index)),
    onDecNowPlaying: index => disptach(actions.decrementIndex(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);

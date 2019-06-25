import React, { Component } from "react";
import styles from "./Landing.module.css";
import { connect } from "react-redux";

import NowPlaying from "../../components/NowPlaying/NowPlaying";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions";
import MediumContainer from "../../components/MediumContainer/MediumContainer";

class Landing extends Component {
  timer = null;

  componentDidMount() {
    this.props.onFetchNowPlaying();
    this.props.onFetchPopularMovies();
    this.props.onFetchTopRatedTv();
    this.props.onFetchNowOnAir();
  }

  componentDidUpdate() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.nowPlayingSliderNextHandler();
    }, 10000);
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
        ) : (
          <Spinner />
        )}
        {this.props.popularMovies ? (
          <MediumContainer
            medium={this.props.popularMovies}
            title="Popular Movies"
          />
        ) : null}
        {this.props.topRatedShows ? (
          <MediumContainer
            medium={this.props.topRatedShows}
            title="Top Rated TV Shows"
          />
        ) : null}
        {this.props.nowOnAir ? (
          <MediumContainer
            medium={this.props.nowOnAir}
            title="Now On the Air"
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nowPlaying: state.nowPlaying.nowPlaying,
    currentIndex: state.nowPlaying.nowPlayingIndex,
    popularMovies: state.popularMovies.popularMovies,
    topRatedShows: state.topRatedTv.topRatedShows,
    nowOnAir: state.nowOnAir.nowOnAir
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchNowPlaying: () => dispatch(actions.fetchNowPlaying()),
    onIncNowPlaying: index => dispatch(actions.incrementIndex(index)),
    onDecNowPlaying: index => dispatch(actions.decrementIndex(index)),
    onFetchPopularMovies: () => dispatch(actions.fetchPopularMovies()),
    onFetchTopRatedTv: () => dispatch(actions.fetchTopRatedTv()),
    onFetchNowOnAir: () => dispatch(actions.fetchOnAir())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);

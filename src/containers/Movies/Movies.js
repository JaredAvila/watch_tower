import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import MediumList from "../../components/MediumList/MediumList";
import Spinner from "../../components/UI/Spinner/Spinner";

import * as styles from "./Movies.module.css";

class Movies extends Component {
  state = {
    comingSoonClass: null,
    nowPlayingClass: null,
    popularClass: null,
    topRatedClass: null,
    comingSoon: false,
    nowPlaying: false,
    popular: false,
    topRated: false
  };

  componentDidMount() {
    this.props.onFetchComingSoon();
    this.props.onFetchNowPlaying();
    this.setState({ comingSoonClass: styles.Active });
  }

  componentDidUpdate() {}

  render() {
    return (
      <div className={styles.Movies}>
        <h1 className={styles.Headline}>Browse Movies</h1>
        <div className={styles.Container}>
          <div className={styles.Controls}>
            <h1 className={this.state.comingSoonClass}>Coming Soon</h1>
            <h1 className={this.state.nowPlayingClass}>Now Playing</h1>
            <h1 className={this.state.popularClass}>Popular</h1>
            <h1 className={this.state.topRatedClass}>Top-Rated</h1>
          </div>
          <div className={styles.MovieList}>
            <div className={styles.ComingSoon}>
              {this.props.comingSoon ? (
                <MediumList medium={this.props.comingSoon} />
              ) : (
                <div className={styles.Spinner}>
                  <Spinner />
                </div>
              )}
            </div>
            <div className={styles.NowPlaying}>
              {this.props.nowPlaying ? (
                <MediumList medium={this.props.nowPlaying} />
              ) : null}
            </div>
            <div className={styles.Popular}>
              {this.props.popular ? (
                <MediumList medium={this.props.popular} />
              ) : null}
            </div>
            <div className={styles.TopRated}>
              {this.props.topRated ? (
                <MediumList medium={this.props.topRated} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comingSoon: state.comingSoon.comingSoonMovies,
    nowPlaying: state.nowPlaying.nowPlaying
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchComingSoon: () => dispatch(actions.fetchComingSoonMovies()),
    onFetchNowPlaying: () => dispatch(actions.fetchNowPlaying()),
    onFetchPopular: () => dispatch(actions.fetchPopularMovies()),
    onFetchTopRated: () => dispatch(actions.fetchTopRatedMovies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);

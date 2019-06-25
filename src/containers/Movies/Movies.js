import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import MediumList from "../../components/MediumList/MediumList";
import Spinner from "../../components/UI/Spinner/Spinner";

import * as styles from "./Movies.module.css";

class Movies extends Component {
  state = {
    comingSoonClass: styles.Active,
    nowPlayingClass: null,
    popularClass: null,
    topRatedClass: null,
    comingSoon: "block",
    nowPlaying: "none",
    popular: "none",
    topRated: "none"
  };

  componentDidMount() {
    this.props.onFetchComingSoon();
    this.props.onFetchNowPlaying();
    this.props.onFetchTopRated();
    this.props.onFetchPopular();
  }

  onFilterClickHandler = filter => {
    switch (filter) {
      case "comingSoon":
        this.setState({
          comingSoon: "block",
          nowPlaying: "none",
          popular: "none",
          topRated: "none",
          comingSoonClass: styles.Active,
          nowPlayingClass: null,
          popularClass: null,
          topRatedClass: null
        });
        break;
      case "nowPlaying":
        this.setState({
          comingSoon: "none",
          nowPlaying: "block",
          popular: "none",
          topRated: "none",
          comingSoonClass: null,
          nowPlayingClass: styles.Active,
          popularClass: null,
          topRatedClass: null
        });
        break;
      case "popular":
        this.setState({
          comingSoon: "none",
          nowPlaying: "none",
          popular: "block",
          topRated: "none",
          comingSoonClass: null,
          nowPlayingClass: null,
          popularClass: styles.Active,
          topRatedClass: null
        });
        break;
      case "topRated":
        this.setState({
          comingSoon: "none",
          nowPlaying: "none",
          popular: "none",
          topRated: "block",
          comingSoonClass: null,
          nowPlayingClass: null,
          popularClass: null,
          topRatedClass: styles.Active
        });
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div className={styles.Movies}>
        <h1 className={styles.Headline}>Browse Movies</h1>
        <div className={styles.Container}>
          <div className={styles.Controls}>
            <h1
              onClick={() => this.onFilterClickHandler("comingSoon")}
              className={this.state.comingSoonClass}
            >
              Coming Soon
            </h1>
            <h1
              onClick={() => this.onFilterClickHandler("nowPlaying")}
              className={this.state.nowPlayingClass}
            >
              Now Playing
            </h1>
            <h1
              onClick={() => this.onFilterClickHandler("popular")}
              className={this.state.popularClass}
            >
              Popular
            </h1>
            <h1
              onClick={() => this.onFilterClickHandler("topRated")}
              className={this.state.topRatedClass}
            >
              Top-Rated
            </h1>
          </div>
          <div className={styles.MovieList}>
            <div
              className={styles.ComingSoon}
              style={{ display: this.state.comingSoon }}
            >
              {this.props.comingSoon ? (
                <MediumList medium={this.props.comingSoon} />
              ) : (
                <div className={styles.Spinner}>
                  <Spinner />
                </div>
              )}
            </div>
            <div
              className={styles.NowPlaying}
              style={{ display: this.state.nowPlaying }}
            >
              {this.props.nowPlaying ? (
                <MediumList medium={this.props.nowPlaying} />
              ) : null}
            </div>
            <div
              className={styles.Popular}
              style={{ display: this.state.popular }}
            >
              {this.props.popular ? (
                <MediumList medium={this.props.popular} />
              ) : null}
            </div>
            <div
              className={styles.TopRated}
              style={{ display: this.state.topRated }}
            >
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
    nowPlaying: state.nowPlaying.nowPlaying,
    popular: state.popularMovies.popularMovies,
    topRated: state.topRatedMovies.topRatedMovies
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

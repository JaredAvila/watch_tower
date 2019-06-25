import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import MediumList from "../../components/MediumList/MediumList";

import * as styles from "./Movies.module.css";

class Movies extends Component {
  componentDidMount() {
    this.props.onFetchComingSoon();
  }

  render() {
    return (
      <div className={styles.Movies}>
        <h1 className={styles.Headline}>Browse Movies</h1>
        <div className={styles.Container}>
          <div className={styles.Controls}>
            <h1 className={styles.Active}>Coming Soon</h1>
            <h1>Now Playing</h1>
            <h1>Popular</h1>
            <h1>Top-Rated</h1>
          </div>
          <div className={styles.MovieList}>
            {this.props.comingSoon ? (
              <MediumList
                medium={this.props.comingSoon}
                title="Upcoming Movies"
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comingSoon: state.comingSoon.comingSoonMovies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchComingSoon: () => dispatch(actions.fetchComingSoonMovies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);

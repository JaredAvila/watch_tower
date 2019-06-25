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
        <ul>
          {this.props.comingSoon ? (
            <MediumList
              medium={this.props.comingSoon}
              title="Upcoming Movies"
            />
          ) : null}
        </ul>
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

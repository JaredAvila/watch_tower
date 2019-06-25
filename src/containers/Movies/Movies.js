import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import MediumContainer from "../../components/MediumContainer/MediumContainer";

class Movies extends Component {
  componentDidMount() {
    this.props.onFetchComingSoon();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.comingSoon ? (
            <MediumContainer
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

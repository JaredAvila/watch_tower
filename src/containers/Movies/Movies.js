import React, { Component } from "react";

class Movies extends Component {
  render() {
    return (
      <div>
        <h1>Movies</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetch
  };
};

export default Movies;

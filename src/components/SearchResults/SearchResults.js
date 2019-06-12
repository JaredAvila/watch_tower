import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Media from "../Media/Media";

import styles from "./SearchResults.module.css";

class SearchResults extends Component {
  state = {
    results: [],
    query: ""
  };

  componentDidMount() {
    this.setState({ query: this.props.match.params.query });
  }

  render() {
    const returned = this.state.results.map(res => {
      return <Media media={res} />;
    });
    return (
      <div className={styles.SearchResults}>
        {this.state.results.length > 0 ? (
          { returned }
        ) : (
          <div>
            <h1>No results for {this.state.query}</h1>
            <Link to="/">Home</Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);

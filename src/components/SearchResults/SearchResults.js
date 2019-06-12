import React, { Component } from "react";
import { connect } from "react-redux";

import Media from "../Media/Media";

import styles from "./SearchResults.module.css";

class SearchResults extends Component {
  render() {
    console.log(this.props.match.params.query);
    return (
      <div className={styles.SearchResults}>
        here is where the shit will go
        <i class="fas fa-hand-middle-finger" />
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

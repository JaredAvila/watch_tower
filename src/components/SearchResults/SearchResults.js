import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { apiKey } from "../../keys/keys";
import { formatTitle } from "../hoc/formatTitle";

import Media from "../Media/Media";
import Spinner from "../UI/Spinner/Spinner";

import styles from "./SearchResults.module.css";

class SearchResults extends Component {
  state = {
    results: null,
    query: ""
  };

  componentDidMount() {
    this.setState({ query: this.props.match.params.query });
    axios
      .get(
        "https://api.themoviedb.org/3/search/multi?api_key=" +
          apiKey +
          "&language=en-US&query=" +
          this.props.match.params.query +
          "&page=1&include_adult=false"
      )
      .then(res => {
        const resArray = [];
        res.data.results.forEach(res => {
          const url = "http://image.tmdb.org/t/p/w400";
          let temp = {
            data: res,
            imgUrl: url + res.poster_path,
            liked: false
          };
          let newMedia = formatTitle(temp);
          resArray.push(newMedia);
        });
        this.setState({ results: resArray });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className={styles.SearchResults}>
        <h1>Search Results for {this.state.query}</h1>
        {this.state.results ? (
          this.state.results.map(res => {
            return <Media key={res.data.id} media={res} />;
          })
        ) : (
          <div>
            <Spinner />
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

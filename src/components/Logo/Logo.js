import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/";
import { withRouter } from "react-router-dom";

import watchTowerLogo from "../../assets/img/watch_tower_logo.png";

import styles from "./Logo.module.css";

class Logo extends Component {
  state = {
    query: ""
  };

  onSearchClick = query => {
    this.props.onFetchNowPlaying();
    this.props.history.push("/search/" + query);
  };

  onChangedHandler = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    const menuStyles = [styles.Menu, "fas", "fa-bars"];
    return (
      <div className={styles.Logo}>
        <div className={styles.Right}>
          <img src={watchTowerLogo} alt="Watch Tower" />
          <h1>the WATCH TOWER</h1>
        </div>
        {this.props.open ? (
          ""
        ) : (
          <Fragment>
            <form
              onSubmit={() => this.onSearchClick(this.state.query)}
              className={styles.Form}
            >
              <input
                type="text"
                placeholder="Search"
                value={this.state.query}
                onChange={this.onChangedHandler}
              />
              <button type="submit">
                <i className="fas fa-search" />
              </button>
            </form>
            <i className={menuStyles.join(" ")} onClick={this.props.clicked} />
          </Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.nowPlaying.nowPlaying
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchNowPlaying: () => dispatch(actions.fetchNowPlaying())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Logo));

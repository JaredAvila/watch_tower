import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import nowPlayingReducer from "./store/reducers/nowPlaying";
import popularMoviesReducer from "./store/reducers/popularMovies";
import comingSoonMoviesReducer from "./store/reducers/comingSoonMovies";
import topRatedTvReducer from "./store/reducers/topRatedTv";
import nowOnAirReducer from "./store/reducers/nowOnAir";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  nowPlaying: nowPlayingReducer,
  comingSoon: comingSoonMoviesReducer,
  popularMovies: popularMoviesReducer,
  topRatedTv: topRatedTvReducer,
  nowOnAir: nowOnAirReducer
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();

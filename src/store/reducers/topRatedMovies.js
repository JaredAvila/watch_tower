import * as actionTypes from "../actions/actionTypes";

const initialState = {
  topRatedMovies: null,
  loading: false
};

const topRatedMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOP_RATED_MOVIES:
      return {
        ...state,
        loading: false,
        topRatedMovies: action.movies
      };
    default:
      return state;
  }
};

export default topRatedMoviesReducer;

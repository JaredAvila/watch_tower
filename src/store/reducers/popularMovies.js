import * as actionTypes from "../actions/actionTypes";

const initialState = {
  popularMovies: null,
  shownMovies: null,
  loading: false
};

const popularMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POPULAR_MOVIES:
      return {
        ...state,
        loading: false,
        popularMovies: action.movies
      };
    default:
      return state;
  }
};

export default popularMoviesReducer;

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  comingSoonMovies: null,
  loading: false
};

const comingSoonMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COMING_SOON_MOVIES:
      return {
        ...state,
        loading: false,
        comingSoonMovies: action.movies
      };
    default:
      return state;
  }
};

export default comingSoonMoviesReducer;

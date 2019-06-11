import * as actionTypes from "../actions/actionTypes";

const initialState = {
  topRatedShows: null
};

const topRatedTvReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TOP_RATED_TV:
      return {
        ...state,
        topRatedShows: action.shows
      };
    default:
      return {
        ...state
      };
  }
};

export default topRatedTvReducer;

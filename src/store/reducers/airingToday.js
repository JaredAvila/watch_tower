import * as actionTypes from "../actions/actionTypes";

const initialState = {
  airingToday: null
};

const airingTodayReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_AIRING_TODAY:
      return {
        ...state,
        airingToday: action.shows
      };
    default:
      return {
        ...state
      };
  }
};

export default airingTodayReducer;

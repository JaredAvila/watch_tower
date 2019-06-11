import * as actionTypes from "../actions/actionTypes";

const initialState = {
  nowOnAir: null
};

const nowOnAirReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ON_AIR:
      return {
        ...state,
        nowOnAir: action.shows
      };
    default:
      return {
        ...state
      };
  }
};

export default nowOnAirReducer;

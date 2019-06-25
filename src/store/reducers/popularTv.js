import * as actionTypes from "../actions/actionTypes";

const initialState = {
  popularTv: null,
  loading: false
};

const popularTvReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POPULAR_TV:
      return {
        ...state,
        loading: false,
        popularTv: action.shows
      };
    default:
      return state;
  }
};

export default popularTvReducer;

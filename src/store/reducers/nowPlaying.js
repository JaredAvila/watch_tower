import * as actionTypes from "../actions/actionTypes";

const initialState = {
  nowPlaying: null,
  nowPlayingIndex: 0,
  loading: false
};

const incrementIndex = state => {
  if (state.nowPlayingIndex < state.nowPlaying.length - 1) {
    return state.nowPlayingIndex + 1;
  } else {
    return 0;
  }
};

const decrementIndex = state => {
  if (state.nowPlayingIndex > 0) {
    return state.nowPlayingIndex - 1;
  } else {
    return state.nowPlaying.length - 1;
  }
};

const nowPlayingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NOWPLAYING:
      return {
        ...state,
        loading: false,
        nowPlaying: action.movies
      };
    case actionTypes.INC_NOWPLAYING_INDEX:
      return {
        ...state,
        nowPlayingIndex: incrementIndex(state)
      };
    case actionTypes.DEC_NOWPLAYING_INDEX:
      return {
        ...state,
        nowPlayingIndex: decrementIndex(state)
      };
    default:
      return state;
  }
};

export default nowPlayingReducer;

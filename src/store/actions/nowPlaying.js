import * as actionTypes from "./actionTypes";
import axios from "axios";
import { apiKey } from "../../keys/keys";

const setNowPlayingMovies = movies => {
  return {
    type: actionTypes.SET_NOWPLAYING,
    movies
  };
};

export const incrementIndex = i => {
  return {
    type: actionTypes.INC_NOWPLAYING_INDEX,
    index: i
  };
};

export const decrementIndex = i => {
  return {
    type: actionTypes.DEC_NOWPLAYING_INDEX,
    index: i
  };
};

export const fetchNowPlaying = () => {
  return dispatch => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=" +
          apiKey +
          "&language=en-US&page=1"
      )
      .then(res => {
        const nowPlayingArray = [];
        const backDropUrl = "http://image.tmdb.org/t/p/original";
        const url = "http://image.tmdb.org/t/p/w400";
        res.data.results.forEach(movie => {
          nowPlayingArray.push({
            data: movie,
            backDropUrl: backDropUrl + movie.backdrop_path,
            imgUrl: url + movie.poster_path,
            //TODO: get like for each movie
            liked: false
          });
        });
        dispatch(setNowPlayingMovies(nowPlayingArray));
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };
};

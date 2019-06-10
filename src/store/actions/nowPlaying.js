import * as actionTypes from "./actionTypes";
import axios from "axios";

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
        "https://api.themoviedb.org/3/movie/now_playing?api_key=e950813aa61709dfde6ecca87c8e2279&language=en-US&page=1"
      )
      .then(res => {
        const nowPlayingArray = [];
        const url = "http://image.tmdb.org/t/p/original";
        res.data.results.forEach(movie => {
          nowPlayingArray.push({
            movieData: movie,
            imgUrl: url + movie.backdrop_path,

            //TODO: get like for each movie
            liked: false
          });
        });
        // this.setState({ nowPlaying: nowPlayingArray });
        dispatch(setNowPlayingMovies(nowPlayingArray));
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };
};

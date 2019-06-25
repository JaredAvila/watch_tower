import * as actionTypes from "./actionTypes";
import axios from "axios";
import { apiKey } from "../../keys/keys";

const setTopRatedMovies = movies => {
  return {
    type: actionTypes.SET_TOP_RATED_MOVIES,
    movies
  };
};

export const fetchTopRatedMovies = () => {
  return dispatch => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
          apiKey +
          "&language=en-US&page=1"
      )
      .then(res => {
        const popularMovieArray = [];
        const url = "http://image.tmdb.org/t/p/w400";
        res.data.results.forEach(movie => {
          popularMovieArray.push({
            data: movie,
            imgUrl: url + movie.poster_path,
            //TODO: get like for each movie
            liked: false
          });
        });
        dispatch(setTopRatedMovies(popularMovieArray));
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };
};

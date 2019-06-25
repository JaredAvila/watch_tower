import * as actionTypes from "./actionTypes";
import axios from "axios";
import { apiKey } from "../../keys/keys";

const setComingSoonMovies = movies => {
  return {
    type: actionTypes.SET_COMING_SOON_MOVIES,
    movies
  };
};

export const fetchComingSoonMovies = () => {
  return dispatch => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
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
        dispatch(setComingSoonMovies(popularMovieArray));
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };
};

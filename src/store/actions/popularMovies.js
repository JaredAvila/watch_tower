import * as actionTypes from "./actionTypes";
import axios from "axios";

const setPopularMovies = movies => {
  return {
    type: actionTypes.SET_POPULAR_MOVIES,
    movies
  };
};

export const fetchPopularMovies = () => {
  return dispatch => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=e950813aa61709dfde6ecca87c8e2279&language=en-US&page=1"
      )
      .then(res => {
        const popularMovieArray = [];
        const url = "http://image.tmdb.org/t/p/w300";
        res.data.results.forEach(movie => {
          popularMovieArray.push({
            movieData: movie,
            imgUrl: url + movie.poster_path,
            //TODO: get like for each movie
            liked: false
          });
        });
        dispatch(setPopularMovies(popularMovieArray));
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };
};

import * as actionTypes from "./actionTypes";
import axios from "axios";
import { apiKey } from "../../keys/keys";

const setTopRatedTv = shows => {
  return {
    type: actionTypes.SET_TOP_RATED_TV,
    shows
  };
};

export const fetchTopRatedTv = () => {
  return dispatch => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=" +
          apiKey +
          "&language=en-US&page=1"
      )
      .then(res => {
        const topRateArray = [];
        const url = "http://image.tmdb.org/t/p/w400";
        res.data.results.forEach(show => {
          topRateArray.push({
            data: show,
            imgUrl: url + show.poster_path,
            liked: false
          });
        });
        dispatch(setTopRatedTv(topRateArray));
      })
      .catch(err => console.log(err));
  };
};

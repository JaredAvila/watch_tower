import * as actionTypes from "./actionTypes";
import axios from "axios";
import { apiKey } from "../../keys/keys";

const setAiringToday = shows => {
  return {
    type: actionTypes.SET_AIRING_TODAY,
    shows
  };
};

export const fetchAiringToday = () => {
  return dispatch => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/airing_today?api_key=" +
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
        dispatch(setAiringToday(topRateArray));
      })
      .catch(err => console.log(err));
  };
};

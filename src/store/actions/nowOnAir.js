import * as actionTypes from "./actionTypes";
import axios from "axios";

const setOnAir = shows => {
  return {
    type: actionTypes.SET_ON_AIR,
    shows
  };
};

export const fetchOnAir = () => {
  return dispatch => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/on_the_air?api_key=e950813aa61709dfde6ecca87c8e2279&language=en-US&page=1"
      )
      .then(res => {
        const topRateArray = [];
        const url = "http://image.tmdb.org/t/p/w300";
        res.data.results.forEach(show => {
          topRateArray.push({
            data: show,
            imgUrl: url + show.poster_path,
            liked: false
          });
        });
        dispatch(setOnAir(topRateArray));
      })
      .catch(err => console.log(err));
  };
};

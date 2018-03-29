import axios from 'axios';

const API_KEY = '';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const CITY_NOT_FOUND = 'CITY_NOT_FOUND';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},br`;

  // This is a promise
  const request = axios.get(url).catch(error => {
    return {
      type: CITY_NOT_FOUND,
      payload: error.response.data
    }
  });

  return {
    type: FETCH_WEATHER,
    payload: request
  };


}

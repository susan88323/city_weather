import axios from 'axios';

const API_KEY = '4ee850a0d743d29ce63e07d3386a9fc6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // request is a promise returned by axios get method
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
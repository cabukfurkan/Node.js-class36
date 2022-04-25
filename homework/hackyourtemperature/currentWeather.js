import { API_KEY } from "./sources/keys.js";
import fetch from "node-fetch"

export async function getCurrentWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  const result = await fetch(url);
  const response = await result.json();
  const name = response.name;
  const desc = response.weather[0].description;
  const temp = (response.main.temp - 273.15).toFixed(0);
  return { name, desc, temp };
}
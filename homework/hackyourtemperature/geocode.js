import { API_KEY } from "./sources/keys.js";
import fetch from "node-fetch"

export async function getCoordinates(input) {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=1&appid=${API_KEY}`
  const result = await fetch(url)
  const response = await result.json();
  console.log(response);
  const { lat, lon } = response[0];
  const coordinates = { lat, lon }
  return coordinates
}
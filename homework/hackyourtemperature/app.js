import express from "express"
import { getCurrentWeather } from "./currentWeather.js"
import { getCoordinates } from "./geocode.js"
import fetch from "node-fetch"

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json('hello from backend to frontend!!!')
})

app.post('/weather', async function (req, res) {
  const cityName = req.body.cityName
  if (!cityName) {
    return res.status(400).json('city name not provided')
  }
  try {
    const { lat, lon } = await getCoordinates(cityName)
    const { name, desc, temp } = await getCurrentWeather(lat, lon);
    res.status(200).json({
      cityName: name,
      description: desc,
      temperature: temp,
    })
  } catch (error) {
    res.status(404).json({ weatherText: "City is not found!" })
  }
})

export default app
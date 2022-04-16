import express from "express"

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!!!')
})

app.post('/weather', (req, res) => {
  const cityName = req.body.cityName
  if (!cityName) {
    return res.status(400).json('city name not provided')
  }
  res.status(200).json(cityName)
})

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})
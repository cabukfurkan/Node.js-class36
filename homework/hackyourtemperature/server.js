import express from "express"

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!!!')
})

app.use(express.json())
app.post('/weather', (req, res) => {
  const cityName = req.body.cityName
  if (!cityName) {
    return res.status(400).send('city name not provided')
  }
  res.status(200).json(cityName)
})

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})
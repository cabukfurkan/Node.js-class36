import { response } from "express"
import supertest from "supertest"
import app from '../app.js'

const request = supertest(app)

describe("POST /weather", () => {
  describe("given a city name", () => {
    it("should respond with a 200 status code", async () => {
      const response = await request.post("/weather").send({
        cityName: "name",
      })
      expect(response.status).toBe(200)
    })
    it("should specify json in the content type header", async () => {
      const response = await request.post("/weather").send({
        cityName: "name",
      })
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
  })
  describe("when city is provided", () => {
    it("should be a string", async () => {
      const response = await request.post("/weather").send({
        cityName: "ankara",
      })
      expect(typeof response.body.cityName).toBe('string')
    })
  })

  describe("when empty city is provided", () => {
    it("should return status 400 when empty string", async () => {
      const response = await request.post("/weather").send({
        cityName: ""
      })
      expect(response.status).toBe(400)
    })
  })

  describe("when city is not found", () => {
    it("should return status 404 when city not found", async () => {
      const response = await request.post("/weather").send({
        cityName: "xcvgh",
      })
      if (!response.body.cityName) {
        expect(response.status).toBe(404)
      }
    })
  })
});
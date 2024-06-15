const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_URL = "https://freetestapi.com/api/v1/currencies";

// Get All Currencies
router.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res
      .status(200)
      .json(response.data)
      .send("Fetched All Countries Currencies");
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

module.exports = router;
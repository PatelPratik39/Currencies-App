const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_URL = "https://freetestapi.com/api/v1/currencies";

// Function to handle API requests and errors
const fetchCurrencies = async (url, res) => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      res
        .status(response.status)
        .send(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      res
        .status(error.response.status)
        .send(
          `Error: ${error.response.data.message || error.response.statusText}`
        );
    } else if (error.request) {
      // The request was made but no response was received
      res
        .status(503)
        .send("Service unavailable. No response received from the server.");
    } else {
      // Something happened in setting up the request that triggered an Error
      res.status(500).send(`Error: ${error.message}`);
    }
  }
};

// Get ALl Currencies
router.get("/", (req, res) => {
  fetchCurrencies(API_URL, res);
});

// Get Single Currency by Id
router.get("/:id", (req, res) => {
  fetchCurrencies(`${API_URL}/${req.params.id}`, res);
});

// Route to get a limited number of currency
router.get("/limit/:limit", (req, res) => {
  fetchCurrencies(`${API_URL}?limit=${req.params.limit}`, res);
});

// Route to search for currencies
router.get("/search/:query", (req, res) => {
  fetchCurrencies(`${API_URL}?search=${req.params.query}`, res);
});

// Route to sort currencies using asc or descending
router.get("/sort/:field/:order", (req, res) => {
  fetchCurrencies(
    `${API_URL}?sort=${req.params.field}&order=${req.params.order}`,
    res
  );
});
module.exports = router;

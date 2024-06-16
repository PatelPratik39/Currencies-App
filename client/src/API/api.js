import axios from "axios";
const API_URL = "http://localhost:3000/api/currencies";

// getAllcurruncy


export const getAllCurrencies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching currencies:", error);
    throw error;
  }
};

export const getSingleCurrency = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching currencies:", error);
    throw error;
  }
};


export const getLimitedCurrencies = async (limit) => {
  try {
    const response = await axios.get(`${API_URL}?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching limited currencies:`, error);
    throw error;
  }
};

export const searchCurrencies = async (query) => {
  try {
    const response = await axios.get(`${API_URL}?search=${query}`);
    return response.data;
  } catch (error) {
    console.error(`Error searching currencies:`, error);
    throw error;
  }
};

export const sortCurrencies = async (field, order) => {
  try {
    const response = await axios.get(`${API_URL}?sort=${field}&order=${order}`);
    return response.data;
  } catch (error) {
    console.error(`Error sorting currencies:`, error);
    throw error;
  }
};

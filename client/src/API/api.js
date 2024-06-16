import axios from "axios";
const API_URL = "http://localhost:3000/api/currencies";

// getAllcurruncy

const GetAllCurrency = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Return the response data
  } catch (error) {
    console.error("Error fetching currencies:", error);
    throw error; // Throw the error to handle it in the calling function
  }
};

export default GetAllCurrency;

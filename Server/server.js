const express = require("express");
const cors = require("cors");
const currencyRoute = require("./routes/routes");

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Use currency routes
app.use("/api/currencies", currencyRoute);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Handle unexpected errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

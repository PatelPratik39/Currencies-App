const express = require("express");
const cors = require("cors");
const currencyRoute = require("./routes/routes");
const path = require("path");


const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());
// Add headers to control caching
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); // HTTP 1.1
  res.setHeader('Pragma', 'no-cache'); // HTTP 1.0
  res.setHeader('Expires', '0'); // Proxies
  next();
});

// Use currency routes
app.use("/api/currencies", currencyRoute);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

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

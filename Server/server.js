const express = require("express");
const cors = require("cors");
const currencyRoute = require("./routes/routes");

const app = express();

const PORT = 6000;

app.use(cors());

app.use("/api/currencies", currencyRoute);

app.listen(PORT, () => {
  console.log(`Server is rinning on PORT : ${PORT}`);
});

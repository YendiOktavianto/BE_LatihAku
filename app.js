require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes/route.js");
const bodyParser = require("body-parser");

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Connected to Port ${port}`);
});

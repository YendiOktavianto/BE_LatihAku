require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.APP_PORT || 3000;
const routes = require("./routes/index.js");
const bodyParser = require("body-parser");

// app.use(
//   express.urlencoded({
//     extended: false,
//   })
// );

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.use(express.json());
app.use(bodyParser.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Connected to Port ${port}`);
});

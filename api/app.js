require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use(require("./src/routes/users"));
app.use(require("./src/routes/geolocation"));
app.use(require("./src/routes/logs"));

app.get("/", (req, res) => {
  res.send("Hello Api Tyba <3");
});

app.listen(process.env.PORT, process.env.HOST);
console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);
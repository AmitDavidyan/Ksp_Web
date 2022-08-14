const cors = require("cors");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const product = require("./data2.json");

const fs = require("fs"); //
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/api/products", (req, res) => {
  fs.readFile("./data2.json", "utf8", (err, data) => {
    try {
      res.send(JSON.parse(data));
    } catch (error) {
      console.log("Error parsing JSON:", error, data);
    }
  });
});

app.listen(5000, () => console.log(`Listening on port ${port}`));

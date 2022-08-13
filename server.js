const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const fs = require("fs"); //
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/products", (req, res) => {
  fs.readFile("./data3.json", "utf8", (err, data) => {
    if (err) console.log("error");
    if (data) {
      const products = JSON.parse(data);
      res.send(products);
    }
  });
});

app.listen(5000, () => console.log(`Listening on port ${port}`));

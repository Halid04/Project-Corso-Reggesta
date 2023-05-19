const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

let list = [];

app.post("/add", (req, res) => {
  console.log("post add", req.body);
  list.push(req.body);
  res.sendStatus(200);
});

app.get("/all", (req, res) => {
  console.log("get all ", list);
  res.status(200).send(list);
});

app.use(express.static("webapp"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

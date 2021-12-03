const express = require("express");
const app = express();
var exec = require("child_process").execSync;
const bp = require("body-parser");

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/average", (req, res) => {
  const arr = req.query.input;
  if (arr === null || arr.length == 0) {
    res.send("err!").sendStatus(200);
  }
  const avg = exec(`cd .. && cd calculations && julia average.jl ${arr}`, {
    encoding: "utf-8",
  });
  res.render("average", { average: avg });
});

app.listen("5000");

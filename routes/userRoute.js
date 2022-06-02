const express = require("express");
const route = express.Router();

// post API

//******* sign - up *******//
route.post("/sign-up", (req, res) => {
  res.status(200).send(`Ragister - success`);
});
//******* login *******//
route.post("/login", (req, res) => {
  res.status(200).send(`login - success`);
});
//******* log-out *******//
route.post("/log-out", (req, res) => {
  res.status(200).send(` log-out success`);
});

module.exports = route;

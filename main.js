const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const restaurants = require('./restaurants');

const APP = express();

let cart = [];

const SERVER = http.createServer(APP);

APP.get("/", (req, res) => {
    res.send("norte, sur, centro")
});
APP.get("/:zona", (req, res) => {
  const zona = restaurants.filter(r => r.zona == req.params.zona);
    res.send(zona);
});

APP.get("/zona/:id", (req, res) => {
  res.send(restaurants[req.params.id].name);
});

APP.get("/zona/:id/menu", (req, res) => {
  res.json(restaurants[req.params.id].menu);
  console.log(cart);
  });

APP.post("/zona/:id/menu/select", (req, res) => {
  let selection = restaurants[req.params.id].menu[0].id
  cart.push(selection);
  console.log(cart);
  res.json({ status: 'success', result: {} });
})

APP.get("*", (req, res) => {
  res.send("page not found");
});

SERVER.listen(3000);

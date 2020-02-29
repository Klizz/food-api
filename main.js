const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const restaurants = require('./restaurants');


const APP = express();

APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(bodyParser.json());

let cart = [];
let order 

const SERVER = http.createServer(APP);

APP.get("/", (req, res) => {
    res.send("norte, sur, centro")
});
APP.get("/:zona", (req, res) => {
  const zona = restaurants.filter(r => r.zona == req.params.zona);
    res.send(zona);
});

APP.get("/zona/:id", (req, res) => {
  res.send(restaurants.find( r=> r.id == req.params.id).name);
});

APP.get("/zona/:id/menu", (req, res) => {
  res.json(restaurants.find( r => r.id == req.params.id).menu);
  });

APP.post("/zona/:id/menu/select", (req, res) => {
  let selection = restaurants.find( r => r.id == req.params.id).menu.find(m => m.id == req.body.item)
   if (selection) {
    cart.push(selection);
    console.log(cart);
    res.json({ status: 'success', result: {} });
   } else {
    res.json({ status: 'error', result: { message: "Menu item not found"} });
   }
})

APP.post("/zona/:id/menu/unselect", (req, res) => {
  let items = cart.filter(m => m.id != req.body.item)
  cart = items
  console.log(cart);
  res.json({ status: 'success', result: {cart: cart} });
})

APP.get("*", (res) => {
  res.send("page not found");
});

SERVER.listen(3000);

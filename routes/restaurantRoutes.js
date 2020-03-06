import express from "express";
import bodyParser from "body-parser";
import restaurants from "../restaurants";
const APP = express();

APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(bodyParser.json());

const currentOrders = [];

const restaurantROUTER = express.Router();

restaurantROUTER.get("/", (req, res) => {
  let precios = currentOrders.map(function(total) {
    return total.price;
  });
  let cost = precios.map(function(x) {
    return parseInt(x, 0);
  });
  const total = cost.reduce((a, b) => a + b, 0);
  console.log(total);
  res.send("El costo total de los productos es de " + total);
});

restaurantROUTER.post("/newOrder/:id", (req, res) => {
  let newOrder = restaurants
    .find(r => r.id == req.params.id)
    .menu.find(m => m.id == req.query.item);
  if (newOrder) {
    currentOrders.push(newOrder);
    res.json(currentOrders);
  } else {
    res.send("Ese producto no existe");
  }
});

restaurantROUTER.post("/rejectOrder/:id", (req, res) => {
  let rejectedOrder = restaurants
    .find(r => r.id == req.params.id)
    .menu.find(m => m.id == req.query.item);
  if (rejectedOrder) {
    res.send("La orden de " + rejectedOrder.name + " ha sido rechazada");
  } else {
    res.send("El producto que intentas rechazar no existe");
  }
});

restaurantROUTER.delete("/finishOrder/:id", (req, res) => {
  let orders = currentOrders.filter(m => m.id != req.query.item);
  res.send(orders);
});

export default currentOrders;
module.exports = restaurantROUTER;
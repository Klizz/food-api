import express from "express";
import bodyParser from "body-parser";
import restaurants from "../restaurants";
import currentOrders from "./restaurantRoutes";
const APP = express();

APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(bodyParser.json());

const pendingDeliveries = [];

const deliveryROUTER = express.Router();

deliveryROUTER.get("/", (req, res) => {
  res.send(pendingDeliveries);
});

deliveryROUTER.post("/acceptOrder/:id", (req, res) => {
  let acceptOrder = restaurants
    .find(r => r.id == req.params.id)
    .menu.find(m => m.id == req.query.item);
  pendingDeliveries.push(acceptOrder);
  res.send(acceptOrder.name + " ha sido agregado a las ordenes pendientes");
});

deliveryROUTER.post("/rejectOrder/:id", (req, res) => {
  let rejectOrder = restaurants
    .find(r => r.id == req.params.id)
    .menu.find(m => m.id == req.query.item);
  res.send("La orden de " + rejectOrder.name + " ha sido rechazada");
});

deliveryROUTER.delete("/finishOrder/:id", (req, res) => {
  let orders = pendingDeliveries.filter(m => m.id != req.query.item);
  res.send(orders);
});

module.exports = deliveryROUTER;

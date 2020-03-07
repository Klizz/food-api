import express from "express";
import bodyParser from "body-parser";
import restaurants from "../restaurants";
const APP = express();

APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(bodyParser.json());

const deliveryROUTER = express.Router();

// Array con las entregas pendientes
const pendingDeliveries = [];

/* VER EL TOTAL DE PEDIDOS EN EL ARRAY Y CALCULA CUÁNTO
GANARÁ POR ELLOS, SUPONIENDO QUE GANA $25 POR ENTREGA */
deliveryROUTER.get("/", (res) => {
  let totalDeliveries = pendingDeliveries.length;
  let totalEarned = totalDeliveries * 25;
  res.send("En total has hecho " + totalDeliveries + " entregas y ganado $" + totalEarned + " pesos por ellas");
});

// AGREGAR Y ACEPTAR PEDIDOS AL ARRAY
deliveryROUTER.post("/acceptOrder/:id", (req, res) => {
  // Encuentra el platillo a agregar
  let acceptOrder = restaurants
    .find(r => r.id == req.params.id)
    .menu.find(m => m.id == req.query.item);
  // Determina si el accept es true
  let accept = req.query.accept;
  // Agrega el pedido al array si lo encuentra y es true
  if (acceptOrder && accept == "true") {
    pendingDeliveries.push(acceptOrder);
    res.json(pendingDeliveries);
  } else {
    res.json(pendingDeliveries);
  }
});

// TERMINAR ORDEN
deliveryROUTER.delete("/finishOrder/:id", (req, res) => {
  let orders = pendingDeliveries.filter(m => m.id != req.query.item);
  res.send(orders);
});

module.exports = deliveryROUTER;

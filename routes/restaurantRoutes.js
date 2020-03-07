import express from "express";
import bodyParser from "body-parser";
import restaurants from "../restaurants";
const APP = express();

APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(bodyParser.json());

let currentOrders = [];

const restaurantROUTER = express.Router();
// VER EL COSTO TOTAL DE LOS PRODUCTOS EN EL ARRAY DE ÓRDENES
restaurantROUTER.get("/", (req, res) => {
  // Regresa array con lista de precios de los productos aceptados
  let precios = currentOrders.map(function(total) {
    return total.price;
  });
  // Transforma el array a número
  let cost = precios.map(function(x) {
    return parseInt(x, 0);
  });
  // Calcula la suma de todos los elementos del array de costos
  const total = cost.reduce((a, b) => a + b, 0);
  res.send("El costo total es de " + total);
});


// ACEPTAR O RECHAZAR PEDIDO, PIDE ID Y TRUE SI EL PEDIDO ES ACEPTADO
restaurantROUTER.post("/incommingOrder/:id", (req, res) => {
  // Encuentra el producto dado
  let newOrder = restaurants
  .find(r => r.id == req.params.id)
  .menu.find(m => m.id == req.query.item);
  // Si el producto es true (aceptado), es agregado al array
  let accept = req.query.accept;
  if (newOrder && accept == "true") {
    currentOrders.push(newOrder);
    res.json(currentOrders);
  } else {
    res.json(currentOrders);
  }
});

// QUITAR UN PEDIDO EN ESPECÍFICO DANDO EL ID
restaurantROUTER.delete("/finishOrder/:id", (req, res) => {
  let orders = currentOrders.filter(m => m.id != req.query.item);
  res.send(orders);
});

module.exports = restaurantROUTER;
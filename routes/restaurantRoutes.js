import express from 'express';
import bodyParser from 'body-parser';
import restaurants from '../restaurants';
const APP = express();

APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(bodyParser.json());

const currentOrders = [];

const restaurantROUTER = express.Router();

restaurantROUTER.get("/", (req, res) => {
    res.send(currentOrders);
});

restaurantROUTER.post("/newOrder/:id", (req, res) => {
    let newOrder = "hamburguesa"
    currentOrders.push(newOrder);
    console.log(currentOrders);
    res.send("nuevo pedido");
});

restaurantROUTER.post("/rejectOrder", (req, res) => {
    let newOrder = "Alitas"
    res.send("La orden de " + newOrder + " ha sido rechazada");
});

restaurantROUTER.post("/finishOrder", (req, res) => {
    let finishedOrder = currentOrders.pop(currentOrders[0]);
    res.send("El pedido de " + finishedOrder + " ha sido terminado");
});

module.exports = restaurantROUTER;
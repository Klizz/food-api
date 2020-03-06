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
    let newOrder = restaurants.find( r => r.id == req.params.id).menu.find(m => m.id == req.query.item)
    if (newOrder) {
        currentOrders.push(newOrder);
        res.send(newOrder.name + " ha sido agregado a las ordenes pendientes");
    } else {
        res.send("Ese producto no existe")
    }
});

restaurantROUTER.post("/rejectOrder/:id", (req, res) => {
    let rejectedOrder = restaurants.find( r => r.id == req.params.id).menu.find(m => m.id == req.query.item);
    if (rejectedOrder) {
        res.send("La orden de "  + rejectedOrder.name  + " ha sido rechazada");
    } else {
        res.send("El producto que intentas rechazar no existe")
    }
});

restaurantROUTER.post("/finishOrder/:id", (req, res) => {
    // let toFinish = currentOrders.filter(m => m.id != req.body.item)
    currentOrders.pop();
    res.send("El pedido ha sido terminado");
});

export default currentOrders;
module.exports = restaurantROUTER;
import express from 'express';
import bodyParser from 'body-parser';
import restaurants from '../restaurants';
const APP = express();

APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(bodyParser.json());

const userROUTER = express.Router();

userROUTER.get("/", (req, res) => {
    res.send("norte, sur, centro")
});

userROUTER.get("/:zonas", (req, res) => {
  const zona = restaurants.filter(r => r.zona == req.params.zonas);
    res.send(zona);
});

userROUTER.get("/zona/:id", (req, res) => {
  res.send(restaurants.find( r=> r.id == req.params.id).name);
});

userROUTER.get("/zona/:id/menu", (req, res) => {
  res.json(restaurants.find( r => r.id == req.params.id).menu);
  });

  userROUTER.post("/zona/:id/menu/select", (req, res) => {
  let selection = restaurants.find( r => r.id == req.params.id).menu.find(m => m.id == req.body.item)
   if (selection) {
    cart.push(selection);
    res.json({ status: 'success', result: {} });
   } else {
    res.json({ status: 'error', result: { message: "Menu item not found"} });
   }
})

userROUTER.post("/zona/:id/menu/unselect", (req, res) => {
  let items = cart.filter(m => m.id != req.body.item)
  cart = items
  res.json({ status: 'success', result: {cart: cart} });
})

module.exports = userROUTER;
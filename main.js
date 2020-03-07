import http from 'http';
import express from 'express';

const APP = express();

const USERROUTES = require('./routes/userRoutes');
const RESTAURANTROUTES = require('./routes/restaurantRoutes');
const DELIVERYROUTES = require('./routes/deliveryRoutes');

APP.use('/user', USERROUTES); // Rutas del usuario
APP.use('/restaurant', RESTAURANTROUTES); // Rutas del restaurante
APP.use('/delivery', DELIVERYROUTES); // Rutas del repartidor

const SERVER = http.createServer(APP);

SERVER.listen(4000);
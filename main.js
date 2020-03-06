import http from 'http';
import express from 'express';

const APP = express();

const USERROUTES = require('./routes/userRoutes');
const RESTAURANTROUTES = require('./routes/restaurantRoutes');
const DELIVERYROUTES = require('./routes/deliveryRoutes');

APP.use('/user', USERROUTES);
APP.use('/restaurant', RESTAURANTROUTES);
APP.use('/delivery', DELIVERYROUTES);

const SERVER = http.createServer(APP);

SERVER.listen(5000);
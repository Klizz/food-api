import express from 'express';
import bodyParser from 'body-parser';
import restaurants from '../restaurants';
const APP = express();

APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(bodyParser.json());

const restaurantROUTER = express.Router();
const express = require('express');
const http = require('http');

const APP = express();

const SERVER = http.createServer(APP);

APP.get('/', (req, res) => {
    console.log(req.query);
    res.send('Hola')
})

SERVER.listen(4000);
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const bodyparser = require('body-parser');
const mahasiswaController = require('./controllers/mahasiswaController');
require('dotenv').config();
require('./models/database');

var app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

// primary route
app.use('/', mahasiswaController);

app.listen(port, () => {
    console.log('Express server started at port: ' + port);
});
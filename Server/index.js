const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var carpartsController = require('./controllers/carpartsController.js');
var port = 3000;

var app = express();
app.use(bodyParser.json());
// using cors for communicate with angular (front-end side)
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(port, () => console.log(`Server started at port : ${port}`));

app.use('/carparts', carpartsController);

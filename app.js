'use strict';

const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.set('port', 1350);
app.set('views', 'views');
app.set('view engine', 'ejs');
app.get('/', (req, res) => res.render('index'));

server.listen(app.get('port'), function () {
  console.log('server ready on port', app.get('port'));
});

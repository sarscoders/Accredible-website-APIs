const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const createCredential = require('./pages/createCredential');
const createGroup = require('./pages/createGroup');
const genpdf = require('./pages/genpdf');
const Home = require('./pages/Home');
const apicred = require('./pages/apicred');
app.use('/createCredential', createCredential);
app.use('/createGroup', createGroup);
app.use('/genpdf', genpdf);
app.use('/', Home);
app.use('/edit', apicred);
module.exports = app;

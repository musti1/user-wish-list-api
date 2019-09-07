const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const auth = require('./app/Http/Routes/auth');
const product = require('./app/Http/Routes/product');
const wishList = require('./app/Http/Routes/wishList');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/auth', auth);
app.use('/product', product);
app.use('/wishList', wishList);

module.exports = app;

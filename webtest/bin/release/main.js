#!/usr/local/bin/node

'use strict';

var port = 1618;
var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.use(express.static('./'));
app.use(express.static('./build/release/public'));

app.listen(port);

console.log('http://localhost:' + port);
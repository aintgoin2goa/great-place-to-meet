'use strict';
var path = require('path');

var express = require('express');
var app = express();

app.use('/public', express.static(path.resolve(__dirname + '/../public/')));
app.use('/data', express.static(path.resolve(__dirname + '/../data/')));

app.get('/*', function(req, res){
	res.sendFile(path.resolve(__dirname, '../index.html'));
});


var port = process.env.PORT || 3333;
app.listen(port);

console.log("listening on %s", port);


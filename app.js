'use strict';
var path = require('path');
var debug = require('debug')('Great-Place-To-Meet');

var express = require('express');
var app = express();


app.use(express.static('public'));
app.use(express.static('data'));

app.get('/*', function(req, res){
	res.sendFile('./index.html');
});


var port = process.env.PORT || 3333;
app.listen(port);

debug("listening on %s", port);


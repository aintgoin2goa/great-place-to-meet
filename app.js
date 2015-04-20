'use strict';
var path = require('path');
var debug = require('debug')('Great-Place-To-Meet');

var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));
app.use('/data', express.static(__dirname + '/data'));

app.get('/*', function(req, res){
	res.sendFile(path.resolve(__dirname, './index.html'));
});


var port = process.env.PORT || 3333;
app.listen(port);

debug("listening on %s", port);


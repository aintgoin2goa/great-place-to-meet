'use strict';
var path = require('path');
var debug = require('debug')('Great-Place-To-Meet');

var express = require('express');
var app = express();

debug("__dirname %s", __dirname);
debug("Resolved path to public directory %s", path.resolve(__dirname + '/../public/'));


app.use('/public', express.static(path.resolve(__dirname + '/../public/')));
app.use('/data', express.static(path.resolve(__dirname + '/../data/')));

app.get('/*', function(req, res){
	if(req.url.indexOf('public') > -1){
		res.sendFile(path.resolve(__dirname, req.url));
		return;
	}

	res.sendFile(path.resolve(__dirname, '../index.html'));
});


var port = process.env.PORT || 3333;
app.listen(port);

debug("listening on %s", port);


'use strict';
var path = require('path');
var debug = require('debug')('Great-Place-To-Meet');

var express = require('express');
var app = express();

var cwd = process.cwd();


app.use(express.static(cwd + '/public'));
app.use('/data', express.static(cwd + '/data'));

app.get('/*', function(req, res){
	if(req.url.indexOf('data') > -1 || req.url.indexOf('public') > -1){
		res.sendFile(path.resolve('.' + req.url));
	}
	res.sendFile(path.resolve('./index.html'));
});


var port = process.env.PORT || 3333;
app.listen(port);

debug("listening on %s", port);


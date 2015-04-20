'use strict';
var data = require('../data');

function place(name){
	data.load(name).then(function(placeData){
		console.log(placeData)
	});
}

module.exports = place;

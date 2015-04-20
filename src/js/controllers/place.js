'use strict';
var data = require('../data');
var render = require('../render');
var $ = require('jquery');

var $container;

function place(name){
	if(!$container){
		$container = $('#place-content');
	}

	data.load(name).then(function(placeData){
		render('place-template', $container, placeData);
		$('#splash').removeClass('visible');
		$('#place').addClass('visible');
	});
}



module.exports = place;

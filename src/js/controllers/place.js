'use strict';
var data = require('../data');
var render = require('../render');
var $ = require('jquery');

var illustrations = [
	'public/images/illustrations/ill1-cup.svg',
	'public/images/illustrations/ill2-teacup.svg'
];

var $container;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getIllustration(){
	return illustrations[getRandomInt(0, illustrations.length-1)];
}

function place(name){
	if(!$container){
		$container = $('#place-content');
	}

	data.load(name).then(function(placeData){
		render('place-template', $container, placeData);
		$('#splash').removeClass('finished visible');
		var ill = getIllustration();
		$('#place').addClass('visible');
		$('.illustration').css('background-image', 'url(' + ill + ')');
	});
}



module.exports = place;

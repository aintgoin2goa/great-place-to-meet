'use strict';
var data = require('../data');
var render = require('../render');
var $ = require('jquery');

var illustrations = [
	'images/illustrations/ill1-cup.svg',
	'images/illustrations/ill2-teacup.svg',
	'images/illustrations/ill3-beerkeller.svg',
	'images/illustrations/ill4-stacked-cups.svg'
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
		$('#splash').removeClass('visible');
		var ill = getIllustration();
		$('.illustration').css('background-image', 'url(' + ill + ')');
		window.scrollTo(0,0);
		setTimeout(function(){
			$('#place').addClass('visible');
		},0);
	});
}



module.exports = place;

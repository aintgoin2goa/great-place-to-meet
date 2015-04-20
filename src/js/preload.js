'use strict';
require('es6-promise').polyfill();
var data = require('./data');

var images = [
	'back-button.svg',
	'GPM-logo-white.svg',
	'hazard-purple.svg',
	'hazard-pink.svg',
	'illustrations/ill1-cup.svg',
	'illustrations/ill2-teacup.svg',
	'illustrations/ill3-beerkeller.svg',
	'illustrations/ill4-stacked-cups.svg'
];

function preloadImage(src){
	return new Promise(function(resolve, reject){
		var i = new Image();
		i.onload = resolve;
		i.onerror = reject;
		i.src = src;
	});
}

function preload(){
	return Promise.all([
		data.load('fu-lu-shou'),
		data.load('rangoon-tea-house'),
		data.load('oosten'),
		data.load('cuckoos-nest')
	]).then(function(data){
		return Promise.all(data.map(function(item){
			return preloadImage(item.image);
		}));
	}).then(function(){
		return Promise.all(images.map(function(img){
			return preloadImage('/public/images/' + img);
		}))
	}).catch(function(err){
		console.error(err);
	});

}

module.exports = preload;

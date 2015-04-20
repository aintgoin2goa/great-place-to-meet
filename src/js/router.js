'use strict';
var $ = require('jquery');
var splashController = require('./controllers/splash');
var placeController = require('./controllers/place');

function route(name){
	window.history.pushState({name:name}, name, name);
	handleRoute(name);
}

function handleRoute(name){
	if(name === '' || name === 'home'){
		splashController();
	}else{
		placeController(name);
	}
}

function onPopState(e){
	var name = e.state.name;
	handleRoute(name);
}

function init(){
	window.addEventListener('popstate', onPopState);
	$(document.body).on('click', 'a.internal', function(e){
		var name = e.target.data.href;
		if(name){
			route(name);
		}
	});
	route('rangoon-tea-house');
}

module.exports = {
	init : init,
	route: route
};

'use strict';
require('fetch');
require('es6-promise').polyfill();

function load(name){
	return fetch('/data/'+name+'.json')
		.then(function(response){
			return response.json();
		})
		.catch(error);
}

function error(err){
	console.error(err);
}

module.exports = {
	load : load
};

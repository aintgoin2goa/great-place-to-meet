'use strict';
require('fetch');
require('es6-promise').polyfill();

var __cache = {};

function load(name){
	if(__cache[name]){
		return Promise.resolve(__cache[name]);
	}

	return fetch(name+'.json')
		.then(function(response){
			return response.json();
		}).then(function(json){
			__cache[name] = json;
			return json;
		})
		.catch(error);
}

function search(value){
	value = value.toLowerCase();
	var results = [];
	Object.keys(__cache).forEach(function(key){
		var item = __cache[key];
		if(item.title.toLowerCase().indexOf(value) > -1 ||
			item.city.toLowerCase().indexOf(value) > -1 ||
			item.where.toLowerCase().indexOf(value) > -1){
			results.push({name:key, text:item.title + ', ' + item.city});
		}
	});

	return results;
}

function error(err){
	console.error(err);
}

module.exports = {
	load : load,
	search : search
};

'use strict';
var $ = require('jquery');

var __cache = {};

function convertBool(bool){
	return new Handlebars.SafeString(bool ? 'Yes' : 'No');
}

function privacyPoints(points){
	return new Handlebars.SafeString(points + ' / 5');
}

function render(template, $container, data){
	if(!__cache[template]){
		var templateString = $('#'+template).text();
		__cache[template] = Handlebars.compile(templateString);
	}

	var html =  __cache[template](data);
	$container.empty().html(html);
}

Handlebars.registerHelper('bool', convertBool);
Handlebars.registerHelper('privacyPoints', privacyPoints);

module.exports = render;

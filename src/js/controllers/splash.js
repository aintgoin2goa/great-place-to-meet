'use strict';
var $ = require('jquery');
var data = require('../data');

var inited = false;

var $searchBox;
var $suggestions;
function onType(e){
	var results = data.search($searchBox.val());
	$suggestions.empty();
	results.forEach(function(r){
		$suggestions.append('<li data-name="' + r.name + '">' + r.text + '</li>');
	});
}

function splash(){
	$('#place').removeClass('finished visible');
	$('#splash').addClass('visible');
	$('#place-content').empty();
	if(inited){
		$suggestions.empty();
		$searchBox.val('');
		return;
	}

	$searchBox = $('form input[type="text"]');
	$suggestions = $('ul.suggestions');
	$searchBox.on('keyup', onType);
	$suggestions.on('click', 'li', function(e){
		$(document.body).trigger('route', [e.target.dataset.name]);
	});

	inited = true;
}

module.exports = splash;

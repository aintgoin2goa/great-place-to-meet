'use strict';
var $ = require('jquery');

var inited = false;

function splash(){
	$('#place').removeClass('visible');
	$('#splash').addClass('visible');

	if(inited){
		return;
	}

	$('#splash button').on('click', function(){
		$(document.body).trigger('route', ['rangoon-tea-house']);
	});

	inited = true;
}

module.exports = splash;

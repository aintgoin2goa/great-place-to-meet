'use strict';
var router = require('./router');
var preload = require('./preload');
var $ = require('jquery');

router.init();

preload().then(function(){
	router.route(location.pathname.replace('/', ''));
});



/*global require*/
'use strict';

require.config({
	deps: [
		'index'
	],
	shim: {
		foundation: {
			deps: [
				'jquery',
				'modernizr'
			]
		}
	},
	paths: {
		jquery: '../bower_components/jquery/dist/jquery',
		backbone: '../bower_components/backbone/backbone',
		underscore: '../bower_components/underscore/underscore',
		modernizr: '../bower_components/modernizr/modernizr',
		requirejs: '../bower_components/requirejs/require',
		text: '../bower_components/requirejs-text/text',
		foundation: '../bower_components/foundation/js/foundation',
		'requirejs-text': '../bower_components/requirejs-text/text'
	},
	packages: [

	]
});


(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("plugins/vent", [], factory);
	else if(typeof exports === 'object')
		exports["plugins/vent"] = factory();
	else
		root["plugins/vent"] = root["plugins/vent"] || {}, root["plugins/vent"]["plugins/vent"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Represents a Vent plugin which creates an empty object.
	 * The object will be used as publish/subscribe plugin.
	 *
	 * The module extends the default EVENTS object of Veams
	 * when you pass the option called 'customEvents'.
	 *
	 * @module VeamsVent
	 *
	 * @author Sebastian Fitzner
	 */
	
	var VeamsVent = {
		options: {
			furtherEvents: {}
		},
		pluginName: 'Vent',
		initialize: function initialize(Veams, opts) {
	
			if (!Veams.$) {
				console.error('VeamsVent :: You need to add a DOM handler plugin if you want to use Veams.Vent!');
				return;
			}
	
			if (opts) {
				this.options = Veams.helpers.extend(this.options, opts || {});
			}
	
			Veams.Vent = Veams.$({});
			Veams.EVENTS = Veams.helpers.extend(Veams.EVENTS, this.options.furtherEvents);
		}
	};
	
	exports.default = VeamsVent;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vent.js.map
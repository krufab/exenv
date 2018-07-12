/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
        'undefined' !== typeof window &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseLocalStorage: 'undefined' !== typeof localStorage,

		canUseSessionStorage: 'undefined' !== typeof sessionStorage,

		canUseViewport: canUseDOM && !!window.screen,

		canUseWorkers: 'undefined' !== typeof Worker
	};

	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		define(function () {
			return ExecutionEnvironment;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());

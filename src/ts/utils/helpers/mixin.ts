'use strict';

import defaultsHelper from './defaults';
import methodExtendHelper from './method-extend';

/**
 * Merge method functions.
 *
 * @param {Object} from - Mixin object which will be merged via Helpers.defaults with the methods of our class
 * @param {Array} methods - Array of method names which will be extended.
 */
export default function mixin(from, methods = ['initialize', 'render']) {
	if (from === undefined) {
		console.error(`VeamsHelpers : Mixin :: Mixin not found!`);

		return;
	}

	let to = this.prototype;

	/** Add those methods which exists on `from` but not on `to` to the latter */
	defaultsHelper({to, from});

	/** we do the same for events */
	if (to.events) {
		const toEvents = to.events;
		const fromEvents = from.events;
		defaultsHelper({toEvents, fromEvents});
	}

	// Extend to's methods
	methods.forEach((method) => {
		methodExtendHelper(to, from, method);
	});
};

export type mixinType = (from: {}, methods: string[]) => any;
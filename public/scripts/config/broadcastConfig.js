/**
 * @name broadcastConfig
 * @desc Intra-module communication related constants will stay there
 */
angular.module('myApp').constant(
    'broadcastConfig', {
        LOG_OUT:'LOG_OUT',
        LOGGED_IN:'LOGGED_IN',
        SHOW_MSG_BOX:"SHOW_MSG_BOX",
        HIDE_MSG_BOX:"HIDE_MSG_BOX",
        SHOW_LOADER:"SHOW_LOADER",
        HIDE_LOADER:"HIDE_LOADER"
	}
);
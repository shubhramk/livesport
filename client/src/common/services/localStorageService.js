
/**
 * This service contains the methods to store the application data into some local storage
 */
angular.module('myApp')
	.factory('localStorageService', [ '$localStorage',  function($localStorage){
		return {
			/**
			 * Will set the data into local storage
			 * @storageKey: The key against which the data is to store
			 * @datal: The data to store
			 */
			set: function(storageKey, data){
				$localStorage[storageKey] = data;
			},

			/**
			 * Will get the data from local storage
			 * @storageKey: The key against which the data is stored
			 */
			get: function(storageKey){
				return $localStorage[storageKey];
			},

			/**
			 * Will remove the data from local storage
			 * @storageKey: The key against which the data is stored
			 */
			remove: function(storageKey){
				delete $localStorage[storageKey];
			}
		};
	}]);
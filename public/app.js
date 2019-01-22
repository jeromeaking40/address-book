var addressBook = angular.module('addressBook', ['ngRoute']);

addressBook.config(Router);

addressBook.run([
	'$rootScope',
	function($rootScope) {
		$rootScope.allContacts = [];
	}
]);

Router.$inject = ['$routeProvider', '$locationProvider'];

function Router($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/views/home.html',
			controller: 'HomeCtrl',
			controllerAs: 'home'
		})
		.when('/add', {
			templateUrl: '/views/add-contacts.html',
			controller: 'AddContactsCtrl',
			controllerAs: 'vm'
		})
		.when('/cardview', {
			templateUrl: '/views/card-view.html',
			controller: 'CardContactsCtrl',
			controllerAs: 'card'
		})
		.otherwise({
			redirectTo: '/errorpage'
		});

	// use the HTML5 History API
	$locationProvider.html5Mode(true);
}

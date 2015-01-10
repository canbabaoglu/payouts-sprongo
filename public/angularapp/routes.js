sprongoPayouts.config(function($routeProvider) {
	
	$routeProvider

	.when('/', {
		templateUrl : 'angularapp/views/payouts.html',
		controller  : 'payoutsController'
	});
})
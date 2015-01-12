sprongoPayouts.directive('payoutRecipient', function() {
	return {
		templateUrl: "angularapp/templates/payoutRecipient.html",
		replace    : true,
		scope      : {
			recipient           : '=',
			toggleRecipientData : '&'
		}
	}
});
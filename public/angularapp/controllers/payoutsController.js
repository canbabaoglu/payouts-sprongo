sprongoPayouts.controller('payoutsController', ['$scope', function($scope){
	
	// DATA AND SETUP
	$scope.recipients = [
		{ 
			name         : 'Todd Kelly',
			email        : 'todd.kelly@squaw.com',
			phone        : '5305636222',
			method       : 'us_bank',
			bankName     : 'Bank of America',
			belongsTo    : 'me',
			ownerName    : 'Todd M Kelly',
			type         : 'checkings',
			routing      : '1211000358',
			recipient    : '000609466721',
			teams        : 
				[
					{
						id         : 32257,
						name       : '(old) SVST U10/U12 Team',
						price      : 5.00,
						commission : 15,
						payouts    : [
							{
								payoutId: 90,
								amount  : 3.75,
								dueDate : '2014-04-14 23:59:15',
								status  : 'processed'
							},
							{
								payoutId: 139,
								amount  : 3.75,
								dueDate : '2014-05-14 23:58:50',
								status  : 'processed'
							},
							{
								payoutId: 496,
								amount  : 3.75,
								dueDate : '2014-11-14 23:58:50',
								status  : 'pending'
							}
						]
					},
					{
						id         : 49797,
						name       : 'SVST U16 13/14',
						price      : 5.00,
						commission : 15,
						payouts    : [
							{
								payoutId: 396,
								amount  : 326.25,
								dueDate : '2014-10-13 09:23:20',
								status  : 'processed'
							},
							{
								payoutId: 680,
								amount  : 7.50,
								dueDate : '2015-01-15 00:01:04',
								status  : 'pending'
							}
						]
					} 
				],
			playlists    : [ ]
		},

		{ 
			name         : 'jeffrey s. shiffrin',
			email        : 'jss54@me.com',
			phone        : '970-343-0537',
			method       : 'us_bank',
			bankName     : 'Everbank',
			belongsTo    : 'organization',
			ownerName    : 'teamshiffrin, LLC',
			type         : 'checkings',
			routing      : '063092110',
			recipient    : '0760055874',
			teams        : 
				[
					{
						id         : 31111,
						name       : 'teamshiffrin',
						price      : 5.00,
						commission : 15,
						payouts    : [ ]
					}
				], 
			playlists    : [ ]
		},

		{ 
			name         : 'Amato DePaulo or Tom Yen',
			email        : 'racing@skibluemt.com',
			phone        : '610-826-7700 ext.1236',
			method       : 'us_bank',
			bankName     : 'Susquehanna',
			belongsTo    : 'organization',
			ownerName    : 'Blue Mountain Racing Association',
			type         : 'checkings',
			routing      : '031309123',
			recipient    : '10006389992',
			teams        : 
				[
					{
						id         : 40472,
						name       : 'Blue Mountain Masters Racing',
						price      : 5.00,
						commission : 15,
						payouts    : [
							{
								payoutId: 396,
								amount  : 326.25,
								dueDate : '2014-10-13 09:23:20',
								status  : 'processed'
							},
							{
								payoutId: 680,
								amount  : 7.50,
								dueDate : '2015-01-15 00:01:04',
								status  : 'pending'
							}
						]
					}, 
					{
						id         : 58305,
						name       : 'Blue Mountain Mountaineers',
						price      : 5.00,
						commission : 15,
						payouts    : [
							{
								payoutId: 405,
								amount  : 11.25,
								dueDate : '2014-10-13 09:23:20',
								status  : 'pending'
							}
						]
					} 
				], 
			playlists    : 
				[ 
					{
						id    : 10559,
						name  : 'Bob Schmid',
						price      : 5.00,
						commission : 15
					}
				]
		},
		/*
		{ 
			name         : 'Diamond Peak Ski Education Foundation',
			teams        : 
				[
					{
						id    : 31350,
						name  : 'DPST U16',
						price      : 5.00,
						commission : 15
					},
					{
						id    : 31949,
						name  : 'DPST FIS',
						price      : 5.00,
						commission : 15
					},
					{
						id    : 32153,
						name  : 'DPST U14',
						price      : 5.00,
						commission : 15
					},
					{
						id    : 35798,
						name  : 'DPST U12/U10',
						price      : 5.00,
						commission : 15
					},
				], 
			playlists    : [ ], 
			expanded     : false
		},
		{ 
			name         : 'Mammoth Mountain community Foundation',
			teams        : 
				[
					{
						id    : 31099,
						name  : 'Mammoth FIS Team',
						price      : 5.00,
						commission : 15
					}
				], 
			playlists    : [ ], 
			expanded     : false
		},
		{ 
			name         : 'Sun Valley Ski Education Foundation',
			teams        : 
				[
					{
						id    : 30790,
						name  : 'SVSEF U16 Alpine Team',
						price      : 5.00,
						commission : 15
					},
					{
						id    : 36500,
						name  : 'SVSEF U14',
						price      : 5.00,
						commission : 15
					},
					{
						id    : 30791,
						name  : 'SVSEF U18/U21 Team',
						price      : 5.00,
						commission : 15
					}
				], 
			playlists    : [ ], 
			expanded     : false
		}
		*/
		
	];

	// Add UI related properties to recipients and teams
	setExpanded();

	// Calculate total payouts owed
	$scope.payoutTotal = 0;
	calculateTotalPayouts();

	// UX FUNCTIONS
	$scope.toggleRecipientData = function(recipient) {
		
		if (recipient.expanded == false) {
			recipient.expanded = true;
		} else {
		recipient.expanded = false;
		} 
	};

	$scope.toggleTeamData = function(team) {
		if (team.expandedTeam == false) {
			team.expandedTeam = true;
		} else {
		team.expandedTeam = false;
		}
	}

	$scope.markProcessed = function(payout) {
		payout.status = 'processed';
		calculateTotalPayouts();
		// Send a PUT request to the back-end to update in db
	};

	$scope.markPending = function(payout) {
		payout.status = 'pending';
		calculateTotalPayouts();
		// Send a PUT request to the back-end to update in db
	};

	
	//HELPER FUNCTIONS
	
	//Function to set expanded properties for recipients and teams
	function setExpanded() {
		for (var i = 0; i < $scope.recipients.length; i++) {
			$scope.recipients[i].expanded = false;

			for (var j = 0; j < $scope.recipients[i].teams.length; j++) {
				$scope.recipients[i].teams[j].expandedTeam = false;
			}
		}	
	}

	// Function to calculate recipientPayoutTotal, teamPayoutTotal
	function calculateTotalPayouts() {
		for (var i = 0; i < $scope.recipients.length; i++) {
			
			$scope.recipients[i].recipientPayoutTotal = 0;

			for (var j = 0; j < $scope.recipients[i].teams.length; j++) {
				$scope.recipients[i].teams[j].teamPayoutTotal = 0;
				
				for (var k = 0; k < $scope.recipients[i].teams[j].payouts.length; k++) {
					if ($scope.recipients[i].teams[j].payouts[k].status != 'processed') {
						$scope.recipients[i].teams[j].teamPayoutTotal += $scope.recipients[i].teams[j].payouts[k].amount;
					};
				};

				$scope.recipients[i].recipientPayoutTotal += $scope.recipients[i].teams[j].teamPayoutTotal;
			};

			$scope.payoutTotal += $scope.recipients[i].recipientPayoutTotal;

		};
	}


}]);
sprongoPayouts.controller('payoutsController', ['$scope', function($scope){
	
	$scope.recipients = [
		{ 
			name         : 'Todd M Kelly',
			teams        : 
				[
					{
						id    : 32257,
						name  : '(old) SVST U10/U12 Team'
					},
					{
						id    : 49797,
						name  : 'SVST U16 13/14'
					} 
				],
			playlists    : [ ],
			expanded     : false
		},

		{ 
			name         : 'teamshiffrin, LLC',
			teams        : 
				[
					{
						id    : 31111,
						name  : 'teamshiffrin'
					}
				], 
			playlists    : [ ], 
			expanded     : false
		},

		{ 
			name         : 'Blue Mountain Racing Association',
			teams        : 
				[
					{
						id    : 40472,
						name  : 'Blue Mountain Masters Racing'
					}, 
					{
						id    : 58305,
						name  : 'Blue Mountain Mountaineers'
					} 
				], 
			playlists    : 
				[ 
					{
						id    : 10559,
						name  : 'Bob Schmid'
					}
				],
			expanded     : false
		},

		{ 
			name         : 'Diamond Peak Ski Education Foundation',
			teams        : 
				[
					{
						id    : 31350,
						name  : 'DPST U16'
					},
					{
						id    : 31949,
						name  : 'DPST FIS'
					},
					{
						id    : 32153,
						name  : 'DPST U14'
					},
					{
						id    : 35798,
						name  : 'DPST U12/U10'
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
						name  : 'Mammoth FIS Team'
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
						name  : 'SVSEF U16 Alpine Team'
					},
					{
						id    : 36500,
						name  : 'SVSEF U14'
					},
					{
						id    : 30791,
						name  : 'SVSEF U18/U21 Team'
					}
				], 
			playlists    : [ ], 
			expanded     : false
		}

		
	];


	$scope.toggleRecipientData = function(recipient) {
		
		if (recipient.expanded == false) {
			recipient.expanded = true;
		} else {
		recipient.expanded = false;
		} 

	}
}]);
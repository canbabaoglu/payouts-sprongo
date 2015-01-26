<!DOCTYPE html>
<html lang="en-us" ng-app="sprongoPayouts"> 
<head>
    <title>Sprongo payouts panel </title>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta charset="UTF-8">
    <base href="/" />

    <!-- CSS FILES -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"> 
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"> 
    <link rel="stylesheet" href="styles/payouts.css">
</head>

<body>
	
    <!-- Header -->
    <div class="container-fluid" ng-controller="headerController">
        
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">
                        Sprongo Payouts Panel  
                    </a>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <button type="button" class="btn btn-link" ng-click="logout()">Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
        

        <div class="row page-content container-fluid">
            <div ng-view></div>
        </div>
    </div>
	

    <!-- JS LIBRARIES -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <script src="//code.angularjs.org/1.3.0-rc.2/angular.min.js"></script>
    <script src="//code.angularjs.org/1.3.0-rc.2/angular-route.min.js"></script>

    <!-- OUR SCRIPTS -->
    <script src="angularapp/app.js"></script>
    <script src="angularapp/routes.js"></script>
    <script src="angularapp/controllers/headerController.js"></script>
    <script src="angularapp/controllers/payoutsController.js"></script>
    <script src="angularapp/directives/payoutRecipient.js"></script>

</body>
// JavaScript Document
//////////////////////////////////////////////////////////////////materila angolar routing
 var scotchApp = angular.module('StarterApp', ['ngRoute','ngMaterial','ngSanitize'] );

	// configure our routes
	scotchApp.config(function($routeProvider) {	  

		$routeProvider
			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the list page
			.when('/list/:param1', {
				templateUrl : 'pages/list.html',
				controller  : 'listAppCtrl'
			})
			 // route for the content page
			.when('/content/:param1/:page1', {
				templateUrl : 'pages/content.html',
				controller  : 'contentController'
			})
			
			 // route for the tabs page
			.when('/tabs', {
				templateUrl : 'pages/tabs.html',
				controller  : 'tabsController'
			})

	});
	scotchApp.controller('mainController', function($scope,$location,$routeParams) {
			document.addEventListener("backbutton", function(e){
			if($location.path=='/'){
			e.preventDefault();
			navigator.app.exitApp();
			}
			else {
			navigator.app.backHistory()
			}
			}, false);
		$scope.go = function ( path ) {
		$location.path( path );
		};
		$scope.unescap = function ( str ) {
		$scope.myHTML =ripl= unescape( str );
		
		};
		$scope.cont = function ( paths ) {
		var param1 = $routeParams.param1;
		content='content/'+param1+'/';
		$location.path( content+paths );
		};});
		scotchApp.controller('contentController', function($scope) {});
		scotchApp.controller('tabsController', function($scope) {});
scotchApp.controller('listAppCtrl', function($scope) {});
//////////////////////////////////////////////////////////// tabs

scotchApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple');
})

scotchApp.controller('SubheaderAppCtrl', function($routeParams,$scope, $http) {
var param1 = $routeParams.param1;

if(param1=='farhang'){
$http.get('json/farhang.json')
.then(function(response) {$scope.mins = response.data.items;
});
}else
if(param1=='nice'){
$http.get('json/nice.json')
.then(function(response) {$scope.mins = response.data.items;
});
}
else
if(param1=='rols'){
$http.get('json/rols.json')
.then(function(response) {$scope.mins = response.data.items;});
}
else
if(param1=='modern'){
$http.get('json/modern.json')
.then(function(response) {$scope.mins = response.data.items;});
}
else
if(param1=='ripair'){
$http.get('json/ripair.json')
.then(function(response) {$scope.mins = response.data.items;});
}

});

//////////////////////////////////////////////////////////// content

scotchApp.controller('contentController', function($routeParams,$scope, $http) {
var param1 = $routeParams.param1;
var page1 = $routeParams.page1;
$scope.pageid=page1;
if(param1=='farhang'){
    $http.get('json/farhang.json')
    .then(function(response) {$scope.textfull = response.data.items;
	});
}else
if(param1=='nice'){
$http.get('json/nice.json')
.then(function(response) {$scope.textfull = response.data.items;});
}
else
if(param1=='rols'){
$http.get('json/rols.json')
.then(function(response) {$scope.textfull = response.data.items;});
}
else
if(param1=='modern'){
$http.get('json/modern.json')
.then(function(response) {$scope.textfull = response.data.items;});
}
else
if(param1=='ripair'){
$http.get('json/ripair.json')
.then(function(response) {$scope.textfull = response.data.items;});
}
else
if(param1=='help'){
$http.get('json/help.json')
.then(function(response) {$scope.textfull = response.data.items;});
}

});

//////////////////////////////////////////////////////////	//////////////////////////sid nav
scotchApp.controller('Sidnav', function ($scope, $timeout, $mdSidenav, $log) {
$scope.toggleLeft = buildDelayedToggler('left');
$scope.toggleRight = buildToggler('right');
$scope.isOpenRight = function(){
  return $mdSidenav('right').isOpen();
};
/**
 * Supplies a function that will continue to operate until the
 * time is up.
 */
function debounce(func, wait, context) {
  var timer;
  return function debounced() {
	var context = $scope,
		args = Array.prototype.slice.call(arguments);
	$timeout.cancel(timer);
	timer = $timeout(function() {
	  timer = undefined;
	  func.apply(context, args);
	}, wait || 10);
  };
}
/**
 * Build handler to open/close a SideNav; when animation finishes
 * report completion in console
 */
function buildDelayedToggler(navID) {
  return debounce(function() {
	$mdSidenav(navID)
	  .toggle()
	  .then(function () {
		$log.debug("toggle " + navID + " is done");
	  });
  }, 200);
}
function buildToggler(navID) {
  return function() {
	$mdSidenav(navID)
	  .toggle()
	  .then(function () {
		$log.debug("toggle " + navID + " is done");
	  });
  }
}
})

.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
$scope.close = function () {
$mdSidenav('right').close()
  .then(function () {
	$log.debug("close RIGHT is done");
  });
}; 
  $scope.settings = [
  { name: 'آپارتمان مدرن', icon: 'img/icons/idea13.svg', links: '/list/modern' },
  { name: 'فرهنگ آپارتمان نشینی',  icon: 'img/icons/construction47.svg', links: '/list/farhang'  },
  { name: 'قوانین آپارتمان نشینی',  icon: 'img/icons/justice4.svg', links: '/list/rols'  },
  { name: 'آپارتمان زیبا',  icon: 'img/icons/leaf64.svg', links: '/list/nice'  },
  { name: 'نگهداری و تعمیرات آپارتمان',  icon: 'img/icons/wrenches12.svg', links: '/list/ripair'  },
  { name: 'بخش شارژ آنلاین به زودی',  icon: 'img/icons/online15.svg', links: '/content/help/35'  }, 
  ];
});
	
////////////////////////////////////////////////////////////	

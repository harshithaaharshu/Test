var obj = angular.module("myApp",["ngRoute"])
	obj.config(function($routeProvider){
		
		$routeProvider
		.when("/",{
			templateUrl:"about.html"
		})
		.when("/user",{
			
			templateUrl:"userlist.html"
		});
		
	});//config ends
	
	obj.controller("myCtrl1", function($scope){
		
	});//home controller ends
	
	obj.controller("myCtrl2", function($scope, $http){
		$http.get("list.json").then(function(response){
			$scope.user=response.data;
		});
		
	});//ctrl2 ends
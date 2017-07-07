var app = angular.module("qianfeng", []);
app.controller("indexCtrl", function($scope) {
	$scope.name = "老姚教育"
})
app.directive("indexTop", function() {
	return {
		templateUrl:"template/indexTop.html"
	}
})
app.directive("baseFixed",function(){
	return {
		templateUrl:"template/baseFixed.html"
	}
})

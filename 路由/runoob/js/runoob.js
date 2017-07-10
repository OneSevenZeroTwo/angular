var app = angular.module("runoobApp",["ui.router"]);
app.config(function($stateProvider){
	$stateProvider.state("index",{
		url:"/index",
		templateUrl:"template/index.html"
	}).state("index.a",{
		url:"/a",
		templateUrl:"template/container.html"
	}).state("index.a.jjjjjjjj",{
		url:"/dddddd",
		template:"<p>123</p>"
	})
})

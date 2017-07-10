//主模块
var app = angular.module("newsApp",["ngRoute","routes"])


//路由模块
var routes = angular.module("routes",[])
routes.config(function($routeProvider){
	$routeProvider.when("/recommend",{
		templateUrl:"newsTemplate/recommend.html"
	}).when("/video",{
		templateUrl:"newsTemplate/video.html"
	}).when("/hot",{
		templateUrl:"newsTemplate/hot.html"
	})
})

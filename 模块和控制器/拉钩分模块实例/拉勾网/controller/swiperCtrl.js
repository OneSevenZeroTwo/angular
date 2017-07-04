var swiper = angular.module("swiper", [])
swiper.controller("swiperCtrl", function($scope) {
	//model
	$scope.title = "拉勾网"
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});
	$scope.imgs = ["./img/1.png", "./img/2.jpg"]
})
var list = angular.module("list", [])
list.controller("listCtrl", function($scope, $sce) {
	//model
	$scope.news = [{
		title: "标题一",
		img: "./img/2.jpg",
		desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
	}, {
		title: "标题一",
		img: "./img/2.jpg",
		desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
	}]

	$scope.html = $scope.news.map(function(item) {
		return `
			<a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
						<div class="weui-media-box__hd">
							<img class="weui-media-box__thumb" src="${item.img}" alt="">
						</div>
						<div class="weui-media-box__bd">
							<h4 class="weui-media-box__title">${item.title}</h4>
							<p class="weui-media-box__desc">${item.desc}</p>
						</div>
					</a>
		`
	}).join("")

	$scope.html = $sce.trustAsHtml($scope.html)
})
app.controller("listCtrl", function($scope,$sce) {
	//model
	$scope.news = [{
		id:1,
		title: "标题一",
		img: ["./img/2.jpg","./img/2.jpg","./img/2.jpg"],
		desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
	}, 
	{
		id:2,
		title: "标题asdasdas",
		img: [],
		desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
	},
	
	{
		id:3,
		title: "标题一",
		img: ["./img/2.jpg"],
		desc: "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。"
	}]
})
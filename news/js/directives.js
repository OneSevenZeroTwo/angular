;
(function() {
	var directives = angular.module("directives", []);
	directives.directive("xheader", [function() {
		return {
			templateUrl: "directive/xheader.html"
		}
	}])
	directives.directive("xsearch", [function() {
		return {
			templateUrl: "directive/xsearch.html",
			link: function(scope, ele, attr) {
				scope.isShowSearchBar = false;
				scope.changeSearchBar = function() {
					scope.isShowSearchBar = true;
				}
			}
		}
	}])
	directives.directive("xswiper", [function() {
		return {
			templateUrl: "directive/xswiper.html",
			link: function(scope, ele, attr) {
				scope.imgs = ["images/1.jpg"];				
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					paginationClickable: true
				});
			}
		}
	}])
	directives.directive("xlist", [function() {
		return {
			templateUrl: "directive/xlist.html"
		}
	}])
	directives.directive("xfooter", [function() {
		return {
			templateUrl: "directive/xfooter.html",
			link: function(scope, ele, attr) {
				scope.tab = 0;
				scope.changeTab = function(tab) {
					scope.tab = tab
				}
			}
		}
	}])
	directives.directive("xactionsheet", [function() {
		return {
			templateUrl: "directive/xactionsheet.html",
			link: function(scope, ele, attr) {
				scope.isShowActionSheet = false
				scope.changeActionSheet = function(){
					console.log("111")
					scope.isShowActionSheet = true
				}
			}
		}
	}])
	directives.directive("xgallery", [function() {
		return {
			templateUrl: "directive/xgallery.html",
			link: function(scope, ele, attr) {
				scope.isShowGallery = false;
				scope.changeGallery = function(galleryImg){
					scope.galleryImg = galleryImg
					scope.isShowGallery = true;
				}
			}
		}
	}])
})();
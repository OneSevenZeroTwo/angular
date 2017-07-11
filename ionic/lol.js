var http = require("http");
http.createServer(function(request, response) {
	response.setHeader("Access-Control-Allow-Origin","*");
	http.get("http://qt.qq.com/php_cgi/news/php/varcache_getnews.php?id=12&page=0&plat=ios&version=33", function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk
		})
		res.on('end', function() {
			//console.log(data)
			response.end(data)
		})
	})
}).listen("6789")

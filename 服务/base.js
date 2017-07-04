var http = require("http");
http.createServer(function(req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	var obj = {
		name: "laoxielaoxie"
	}
	res.end(JSON.stringify(obj));
}).listen(8989)
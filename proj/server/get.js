var http = require('http');
var url = require("url");
http.createServer(function (req, res) {
	var params = url.parse(req.url, true).query;
	var params = querystring.parse(postData);
	var data = [{test:'test'}];
 	res.writeHead(200, {
 		'Content-Type': 'application/json',
 		'Access-Control-Allow-Origin': '*'
 	});
	res.end(JSON.stringify(data));
}).listen(8888);
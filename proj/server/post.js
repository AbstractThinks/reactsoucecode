var http = require('http');
var url = require("url");
var querystring = require("querystring");

http.createServer(function (req, res) {
    req.setEncoding('utf-8');
    var postData = "";

    req.addListener("data", function (postDataChunk) {
        postData += postDataChunk;
    });

     req.addListener("end", function () {
        var data = [{test:'test'}];
     	var params = querystring.parse(postData);
     	res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
  		res.end(JSON.stringify(data));
     });
}).listen(8889);
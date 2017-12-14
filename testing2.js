var http=require('http');
var url=require('url');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	var myval=url.parse(req);
	res.end('hello world'+myval.year);
}).listen(2);
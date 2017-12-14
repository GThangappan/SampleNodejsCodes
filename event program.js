var http=require('http');
var events=require('events');
var reader=require('fs');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	reader.readFile('testing.txt','utf-8',function(err,data){
		if(err){
			console.log(err);
		}
		res.end(data);
	});
	
}).listen(8081);
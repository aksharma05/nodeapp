var http=require("http");
http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'}	);
	res.end("hello");
	
	
}).listen(1987,'127.0.0.1');
console.log('web server strat');

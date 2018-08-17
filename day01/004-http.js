/*
 *构建web服务器
 *
 *
 */
var http = require('http');
/*
 *使用http.createServer()方法创建一个web服务器
 *返回一个Server实例
 */
var server = http.createServer();
/*
 *服务器的操作
 */
server.on('request',function(request,response){
	console.log('receive request:'+request.url);
	// response.write('hello,');
	switch(request.url){
		case '/':
			response.setHeader('Content-Type','text/plain;charset=utf-8');
			response.end('hello 世界');
			break;
		case '/about':
			response.end('about');
			break;
		default:
			response.end('hello');
			break;
	}
	
	
})
/*
 *绑定端口号，启动服务器
 */
server.listen(3000,function(){
	console.log('服务器启动成功，可以访问了')
});
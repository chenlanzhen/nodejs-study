var http = require('http')
var url = require('url')
var fs = require('fs')
var template = require('art-template')
var comments = [{
	name:'Mary',
	message:'hello',
	time:'2018-08-16'
},{
	name:'Stephen',
	message:'hey',
	time:'2018-08-16'
}];

/*
 *创建服务器
 */
http
  .createServer(function(req,res){		//接受请求和响应
  	var urlObj = url.parse(req.url,true)  //解析url,第二个参数标为true，用于将查询字符串转为对象
  	
  	// 首页
  	if(req.url === '/'){
  		
  		fs.readFile('./views/index.html',function(err,data){
  			if(err){
  				return console.log('读取失败')
  			}
				var html = template.render(data.toString(),{comments:comments})
  			res.end(html)
  		})
  		// 留言页
  	}else if(req.url === '/post'){
  		fs.readFile('./views/post.html',function(err,data){
  			if(err){
  				return console.log('读取失败')
  			}
  			res.end(data)
  		})
  		// 接口--提交留言
  	}else if(urlObj.pathname === '/postMessage'){
  		console.log(urlObj)
  		var message = urlObj.query
  		message.time = '2018-08-16'
  		comments.unshift(message)
  		res.statusCode = '302'
  		res.setHeader('Location','/')
   		res.end()
   		// 处理静态资源
  	}else if(req.url.indexOf('/public') > -1){
  		console.log(req.url)
  		fs.readFile('.'+req.url,function(err,data){
  			if(err){
  				return console.log('静态资源读取失败')
  			}
  			res.end(data)
  		})
  		// 404页面
  	}else{
  		fs.readFile('./views/404.html',function(err,data){
  			if(err){
  				return res.end('404')
  			}
  			res.end(data)
  		})
  	}
  })
  /*
   *监听3000端口号
   */
  .listen(3000,function(err){
  	if(err){
  		return console.log(err)
  	}
  	console.log('The server is running on:localhost:3000/')
  })
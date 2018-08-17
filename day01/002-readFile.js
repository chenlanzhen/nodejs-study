/*
 *加载fs核心模块
 *
 *
 */
var fs = require('fs');
/*
 *读取文件
 *  第一个参数是要读取的文件路径
 *  第二个参数是一个回调函数
 *  error
 *    如果读取失败，error是错误对象
 *    如果读取成功，error就是null
 *  data
 *    如果读取成功，data就是读取到的数据
 *
 */
fs.readFile('./001-HelloWorld.js',function(error,data){
	// data为Buffer对象，存放元素为16进制的两位数
	console.log(data);
	// 显示文件文本内容
	console.log(data.toString())
})
/*
 *
 * 
 */
 var fs = require('fs');

/*
 *第一个参数，文件路径
 *  文件路径中的文件夹必须是已经创建的，如未创建，则报错
 *第二个参数，文件内容
 *第三个参数，回调函数
 */
 fs.writeFile('./data/hello.md','hello',function(error){
 	console.log(error);
 })
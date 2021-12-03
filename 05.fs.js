const {writeFile,readFile,createReadStream,createWriteStream} = require('fs')

// 简单写
writeFile(__dirname+'/demo.txt','hello world',(err) => {
  if(!err) console.log('简单写入成功！！');
})

// 简单读
readFile(__dirname + '/demo.txt', (err,data) => {
  if(!err) console.log('简单读：' + data.toString()); // 输出的data是Buffer数据
})

// 流写
const ws = createWriteStream(__dirname + '/ws.txt')
ws.on('open',() => {
  
})
ws.on('close',() => {
  
})
ws.write('hello ')
ws.write('world ')
ws.end()

// 流读（分次读取）
var rs = fs.createReadStream(__dirname + '/ws.txt',{
  highWaterMark: 10 * 1024 *1024
})

rs.on('data',(data) => {
  console.log('流读：' + data.toString());
})

rs.pipe(ws)
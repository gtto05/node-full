// 简单搭建服务器，并输出’ok‘
const http = require('http')

const app = http.createServer((request,response) => {
  // console.log(request.url);
  // 原生搭建的服务器中request对象中只能通过url截取split获取params
  response.end('ok')
})

app.listen(4000,err => {
  if(!err) console.log('server started at http://localhost:4000 ');
  console.log(err);
})
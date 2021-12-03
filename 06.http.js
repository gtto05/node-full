// 简单搭建服务器，并输出’ok‘
const http = require('http')

const app = http.createServer((request,response) => {
  // console.log(request.url);
  console.log(params);
  response.end('ok')
})

app.listen(4000,err => {
  if(!err) console.log('server started at http://localhost:4000 ');
  console.log(err);
})
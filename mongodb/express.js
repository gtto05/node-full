const express = require('express')

const app = express()

app.get('/',(request,response) => {
  // express 封装了query
  const {query} = request
  console.log(query);
  response.send('ok')
})

app.get('/home',(request,response) => {
  response.send('<h1>我是Home页面</h1>')
})

app.get('/home/:id',(request,response) => {
  const {id} = request.params
  // console.log(params);
  response.send(`我是Home-${id}页面`)
})

app.listen(4000,(err) => {
  !err?console.log('服务器启动成功!'):console.log(err);
})
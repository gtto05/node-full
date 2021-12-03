const express = require('express')

const app = express()

// 中间件 --- 防盗链

function guardPic(request,response,next) {
  if(request.get('Referer')) {
    let miniReferer = request.get('Referer').split('/')[2]
    console.log(miniReferer);
    if(miniReferer === 'localhost:5501') {
      next()
    } else {
      response.sendFile(__dirname+'/public/err.jpg')
    }
  } else {
    next()
  }
}
// express.urlencoded({extended:true}) 作用：将post携带的参数挂载到express.body上
app.use(express.urlencoded({extended:true}))

// express.static() 不访问路由直接写文件名+后缀也能看页面

app.get('/',(request,response) => {
  // express 封装了query
  const {query} = request
  console.log(query);
  response.send('ok')
})

app.get('/pic',guardPic,(request,response) => {
  response.sendFile(__dirname+'/public/bg.jpg')
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

module.exports = function db(callback) {
  const mongoose = require('mongoose')

  mongoose.connect('mongodb://localhost:27017/demo')

  mongoose.connection.on('open', (err) => {
    if (err) {
      console.log('数据库链接失败', err);
    } else {
      console.log('数据库链接成功');
      // 操作数据库
      callback()

    }
  })
}
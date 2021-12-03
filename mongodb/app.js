const db = require('./db/db')
const stuModel = require('./db/models/stuModel')
db(function () {
  // 创建
  // stuModel.create({
  //   stu_id:'002',
  //   name:'holden',
  //   age:19,
  //   sex:'男',
  //   hobby:['coding','gym'],
  //   info:'222222'
  // },(err,data) => {
  //   if(!err) console.log(data);
  //   console.log(err);
  // })

  // 查找
  // stuModel.find({name:'xander'},(err,data) => {
  //   if(!err) console.log(data);
  //   console.log(err);
  // })
  stuModel.find({age:{$gte:18}},(err,data) => {
    if(!err) console.log(data);
    console.log(err);
  })

  // stuModel.findOne({name:'xander'},{age:1,_id:0},(err,data) => {
  //   err? console.log(err):console.log(data);
  // })

  // 更新
  // stuModel.updateOne({ name: 'xander' }, { age: 16 }, (err, data) => {
  //   err ? console.log(err) : console.log(data);
  // })

  // 删除 
  // stuModel.deleteMany({age:{$gte:16}},(err,data) => {
  //   err?console.log(err):console.log(data);
  // })
})


const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/demo')

mongoose.connection.on('open',(err) => {
  if(err) {
    console.log('数据库链接失败', err);
  } else {
    console.log('数据库链接成功');
    // 操作数据库
    const stuSchema = new mongoose.Schema({
      stu_id:{
        type:String,
        required:true,
        unique:true
      },
      name:{
        type:String,
        required:true,
      },
      age:{
        type:Number,
        required:true
      },
      sex:{
        type:String,
        required:true,
      },
      hobby:[String],
      info:mongoose.Schema.Types.Mixed,
      date:{
        type:Date,
        default:Date.now()
      },
      enable_flag:{
        type:String,
        default:'Y'
      }
    })

    let stuModel = mongoose.model('students',stuSchema)

    // 创建
    // stuModel.create({
    //   stu_id:'001',
    //   name:'xander',
    //   age:18,
    //   sex:'男',
    //   hobby:['coding','gym'],
    //   info:'111111'
    // },(err,data) => {
    //   if(!err) console.log(data);
    //   console.log(err);
    // })

    // 查找
    // stuModel.find({name:'xander'},(err,data) => {
    //   if(!err) console.log(data);
    //   console.log(err);
    // })
    // stuModel.findOne({name:'xander'},{age:1,_id:0},(err,data) => {
    //   err? console.log(err):console.log(data);
    // })

    // 更新
    stuModel.updateOne({name:'xander'},{age:16},(err,data) => {
      err?console.log(err):console.log(data);
    })

    // 删除
    stuModel.deleteMany({age:16},(err,data) => {
      err?console.log(err):console.log(data);
    })
    
  }
})
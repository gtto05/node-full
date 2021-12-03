const mongoose = require('mongoose')
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

module.exports =  mongoose.model('students',stuSchema)
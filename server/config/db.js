// 导入mongoose
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://127.0.0.1/yfcoo')
  .then(() => {
    console.log("连接数据库成功");
  })
  .catch(err => {
    console.log(err);
  })
module.exports = mongoose
// 注册Schemas
require('./Schemas/User')
require('./Schemas/InviteCode');
require('./Schemas/Good');
require('./Schemas/InventoryLog');
require('./Schemas/Character');
const mongoose = require('mongoose')

// 给哪个数据库
// 哪个集合
// 添加什么格式的文档

// Schema 映射一个集合，内容是集合文档的构成，相当于一个类
// Model 根据Schema生成一套方法， 操作集合的文档

const connect =  () => {
    return new Promise((resolve) => {
        mongoose.connect('mongodb://127.0.0.1:27017/colls')

        mongoose.connection.on('open', () => {
            // 数据库开启时调用的回调函数
            console.log('mongoDB连接成功');

            resolve()
        })
    })
}

module.exports = {
    connect
}

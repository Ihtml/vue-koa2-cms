const Koa = require('koa')
const koaBody = require('koa-body');  // 处理请求体
const { connect } = require('./db');
const cors = require('@koa/cors') // 解决跨域 

const registerRoutes = require('./routers')

const app = new Koa()

// connect()返回promise, 数据库连接成功后再监听端口
connect().then(() => {
    app.use(cors())
    app.use(koaBody())
    registerRoutes(app)

    app.listen(3000, () => {
        console.log('开始监听3000端口...');
    })
})

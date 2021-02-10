const mongoose = require('mongoose')
const Router = require('@koa/router')

const User = mongoose.model('User') // 注册User的Schema

const router = new Router({
    prefix: '/auth',
});

router.post('/register', async (ctx) => {

    const {
        account,
        password,
        inviteCode
    } = ctx.request.body

    // 去找 account 为 传递上来的 “account” 的用户
    const findUser = await User.findOne({
        account,
    }).exec();

    // 判断有没有用户
    if (findUser) {
        // 如果有 表示已经存在
        ctx.body = {
            code: 0,
            msg: '已存在该用户',
            data: null,
        };
        return;
    }

    // 创建一个用户
    const user = new User({
        account,
        password,
    });

    // 把创建的用户同步到 mongodb
    const res = await user.save();

    // 响应成功
    ctx.body = {
        code: 1,
        msg: '注册成功',
        data: res,
    };
})

router.get('/login', async (ctx) => {
    ctx.body = '登录成功了'
})

module.exports = router
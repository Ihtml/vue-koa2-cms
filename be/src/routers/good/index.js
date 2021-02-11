const Router = require('@koa/router');
const mongoose = require('mongoose');
const { getBody } = require('../../helpers/utils');

const GOOD_CONST = {
  IN: 'IN_COUNT',
  OUT: 'OUT_COUNT',
};

const Good = mongoose.model('Good');

const router = new Router({
  prefix: '/good',
});

router.post('/add', async (ctx) => {
  const {
    name,
    price,
    author,
    publishDate,
    classify,
    count,
  } = getBody(ctx);

  const good = new Good({
    name,
    price,
    author,
    publishDate,
    classify,
    count,
  });

  const res = await good.save();

  ctx.body = {
    data: res,
    code: 1,
    msg: '添加成功',
  };
});

router.get('/list', async (ctx) => {
  // https://aa.cc.com/user?page=2&size=20&keyword=书名#fdsafds
  const {
    page = 1,
    keyword = '',
  } = ctx.query;

  let = {
    size = 10,
  } = ctx.query;

  size = Number(size);

  // 2 20
  // 20 20
  // (page - 1) * size

  const query = {};

  if (keyword) {
    query.name = keyword;
  }

  const list = await Good
    .find(query)
    .skip((page - 1) * size)
    .limit(size)
    .exec();

  const total = await Good.countDocuments();

  ctx.body = {
    data: {
      total,
      list,
      page,
      size,
    },
    code: 1,
    msg: '获取列表成功',
  };
});

// METHOD DELETE
// PATH   /book/:id

// /book/:id
// /book/123
// /book/abc
// /book/998888

router.delete('/:id', async (ctx) => {
  const {
    id,
  } = ctx.params;

  const delMsg = await Good.deleteOne({
    _id: id,
  });

  ctx.body = {
    data: delMsg,
    msg: '删除成功',
    code: 1,
  };
});

router.post('/update/count', async (ctx) => {
  const {
    id,
    type,
  } = ctx.request.body;

  let {
    num,
  } = ctx.request.body;

  num = Number(num);

  const good = await Good.findOne({
    _id: id,
  }).exec();

  if (!good) {
    ctx.body = {
      code: 0,
      msg: '没有找到书籍',
    };

    return;
  }

  // 找到了书
  if (type === GOOD_CONST.IN) {
    // 入库操作
    num = Math.abs(num);
  } else {
    // 出库操作
    num = -Math.abs(num);
  }

  good.count = good.count + num;

  if (good.count < 0) {
    ctx.body = {
      code: 0,
      msg: '剩下的量不足以出库',
    };
    return;
  }

  const res = await good.save();

  ctx.body = {
    data: res,
    code: 1,
    msg: '操作成功',
  };
});

router.post('/update', async (ctx) => {
  const {
    id,
    ...others
  } = ctx.request.body;

  const one = await Good.findOne({
    _id: id,
  }).exec();

  // 没有找到书
  if (!one) {
    ctx.body = {
      msg: '没有找到书籍',
      code: 0,
    }
    return;
  }

  const newQuery = {};

  Object.entries(others).forEach(([key, value]) => {
    if (value) {
      newQuery[key] = value;
    }
  });

  Object.assign(one, newQuery);

  const res = await one.save();

  ctx.body = {
    data: res,
    code: 1,
    msg: '保存成功',
  };
});

module.exports = router;
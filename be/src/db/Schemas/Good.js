const mongoose = require('mongoose');
const { getMeta, preSave } = require('../helpers');

const GoodSchema = new mongoose.Schema({
  // 商品名
  name: String,
  // 价格
  price: Number,
  // 保质期
  expirationDate: Number,
  // 生产日期
  producedDate: Number,
  // 分类
  classify: String,
  // 库存
  count: Number,

  meta: getMeta(),
});

GoodSchema.pre('save', preSave);
mongoose.model('Good', GoodSchema);

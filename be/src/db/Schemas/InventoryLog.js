const mongoose = require('mongoose');
const { getMeta, preSave } = require('../helpers');

const InventoryLogSchema = new mongoose.Schema({
  goodId: String, // 商品ID
  type: String,  // 入库还是出库
  num: Number,  // 出入库数量
  user: String,  // 谁操作出入库

  meta: getMeta(),
});

InventoryLogSchema.pre('save', preSave);

mongoose.model('InventoryLog', InventoryLogSchema);

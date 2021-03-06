const auth = require('./auth/index');
const inviteCode = require('./invite-code');
const good = require('./good');
const inventoryLog = require('./inventory-log');
const user = require('./user');
const character = require('./character');
const log = require('./log');
const goodClassify = require('./good-classify');
const userConfig = require('./user-config');

module.exports = (app) => {
    app.use(auth.routes())
    app.use(inviteCode.routes());
    app.use(good.routes());
    app.use(inventoryLog.routes());
    app.use(user.routes());
    app.use(character.routes());
    app.use(log.routes());
    app.use(goodClassify.routes());
    app.use(userConfig.routes());
}
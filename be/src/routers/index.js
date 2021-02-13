const auth = require('./auth/index');
const inviteCode = require('./invite-code');
const good = require('./good');
const inventoryLog = require('./inventory-log');
const user = require('./user');

module.exports = (app) => {
    app.use(auth.routes())
    app.use(inviteCode.routes());
    app.use(good.routes());
    app.use(inventoryLog.routes());
    app.use(user.routes());
}
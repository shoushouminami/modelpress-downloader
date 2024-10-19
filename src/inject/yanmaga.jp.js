module.exports = {
    inject: function () {
        return require("./binb.bricks.pub").inject();
    },
    tearDown: function () {
        require("./binb.bricks.pub").tearDown();
    },
    host: "yanmaga.jp",
};

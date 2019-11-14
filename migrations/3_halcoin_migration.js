const HalCoin = artifacts.require("HalCoin");

module.exports = function (deployer) {
    deployer.deploy(HalCoin);
};
const Crowdfunding = artifacts.require("Crowdfunding");
// const Project = artifacts.require("Project");

module.exports = function (deployer) {
    deployer.deploy(Crowdfunding);
    // deployer.deploy(Project);
};
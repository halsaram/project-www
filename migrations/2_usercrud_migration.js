const UserCrud = artifacts.require("UserCrud");
// const ProjectCrud = artifacts.require("ProjectCrud");

module.exports = function (deployer) {
    deployer.deploy(UserCrud);
    // deployer.deploy(ProjectCrud);
};
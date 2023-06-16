const DynamicArray = artifacts.require("DynamicArray");
const EtherWallet = artifacts.require("EtherWallet");

module.exports = function(deployer) {
  deployer.deploy(DynamicArray);
  deployer.deploy(EtherWallet);
};

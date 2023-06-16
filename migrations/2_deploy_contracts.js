const DynamicArray = artifacts.require("DynamicArray");
const EtherWallet = artifacts.require("EtherWallet");

module.exports = function(deployer) {
  deployer.deploy(DynamicArray);
  deployer.link(DynamicArray, EtherWallet);
  deployer.deploy(EtherWallet);
};

const Spacebear = artifacts.require("Spacebear");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(Spacebear);
  const spacebearInstance = await Spacebear.deployed();

  // Optionally transfer ownership to a different address
  // await spacebearInstance.transferOwnership(accounts[0]);
};

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Musicd", function () {
  it("Should return the new mint value after completion", async function () {
    const Musicd = await ethers.getContractFactory("Musicd");
    const musicd = await Musicd.deploy("testing");
    await musicd.deployed();

    expect(await musicd.mint()).to.equal("testing");

    const setChecksumTxn = await musicd.setChecksum("testing again");

    // wait until the transaction is mined
    await setChecksumTxn.wait();

    expect(await musicd.mint()).to.equal("testing again");
  });
});

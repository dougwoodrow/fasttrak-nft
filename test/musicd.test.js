const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Musicd", function () {
  it("Should return the new mint value after completion", async function () {
    const Musicd = await ethers.getContractFactory("Musicd");
    const musicd = await Musicd.deploy("testing", "user 1");
    await musicd.deployed();

    expect(await musicd.mint()).to.equal("testing:user 1");
  });
});

//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Musicd {
    string private checksum;

    constructor(string memory _checksum) {
        console.log("Minting for checksum: ", _checksum);
        checksum = _checksum;
    }

    function mint() public view returns (string memory) {
        return checksum;
    }

    function setChecksum(string memory _checksum) public {
        console.log("Changing checksum from '%s' to '%s'", checksum, _checksum);
        checksum = _checksum;
    }
}

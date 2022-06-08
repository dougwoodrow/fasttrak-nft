//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Musicd {
    string private principal;

    string private checksum;

    constructor(string memory _checksum, string memory _principal) {
        console.log("Minting for checksum: ", _checksum);
        checksum = _checksum;
        principal = _principal;
    }

    function mint() public view returns (string memory) {
        return string(abi.encodePacked(checksum, ":", principal));
    }
}

// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.24;

contract Campaign {
    string public title;
    string public description;
    uint public amount;
    uint public recAmount = 0;
    string public image;
    address payable public campOwner;

    event donated(
        address indexed doner,
        uint indexed amount,
        uint indexed timeStamp
    );

    constructor(
        string memory _title,
        string memory _description,
        uint _amount,
        string memory _image
    ) {
        title = _title;
        image = _image;
        description = _description;
        amount = _amount;
        campOwner = payable(msg.sender);
    }

    function donate() public payable {
        require(
            amount < recAmount && msg.value <= (amount - recAmount),
            "Inapplicable Amount being transferred"
        );
        campOwner.transfer(msg.value);
        recAmount += msg.value;
        emit donated(msg.sender, msg.value, block.timestamp);
    }
}

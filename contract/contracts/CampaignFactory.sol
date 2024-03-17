// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.24;

import "./Campaign.sol";

contract CampaignFactory {
    address[] public deployedCampaigns;
    event campaignCreated(
        string title,
        uint amount,
        address indexed owner,
        address campaignAddress,
        uint indexed timeStamp,
        string indexed category,
        string image
    );

    function createCampaign(
        string memory _title,
        string memory _description,
        uint _amount,
        string memory _image,
        string memory category
    ) public {
        Campaign campaign = new Campaign(_title, _description, _amount, _image);
        deployedCampaigns.push(address(campaign));
        emit campaignCreated(
            _title,
            _amount,
            msg.sender,
            address(campaign),
            block.timestamp,
            category,
            _image
        );
    }
}

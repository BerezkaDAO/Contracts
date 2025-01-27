// Copyright (C) 2020 Easy Chain. <https://easychain.tech>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

pragma experimental ABIEncoderV2;
pragma solidity 0.6.5;

import { Ownable } from "../Ownable.sol";
import { ERC20 } from "../ERC20.sol";

/**
 * @dev BerezkaPriceOverride contract.
 * This contract allows to override token prices from 1inch exchange to correctly
 * adjust prices of composite tokens not yet supported by Zerion
 * @author Vasin Denis <denis.vasin@easychain.tech>
 */
contract BerezkaPriceOverride is Ownable() {

    mapping(address => uint256) public prices;

    mapping(address => address) public tokens;

    /**
     * Sets price (in USDC, i.e. decimals = 6) for a given token. 0 indicates no price override.
     * Sets price for a (decimals) amount single token of _token in USDC
     */
    function setPrice(
        address _token,
        uint256 _price
    ) 
        public
        onlyOwner()
    {
        require(_token != address(0));

        prices[_token] = _price;
    }

    /**
     * Sets Token override
     */
    function setToken(
        address _from,
        address _to
    ) 
        public
        onlyOwner()
    {
        require(_to != address(0), "Should not be empty token");
        tokens[_from] = _to;
    }

    function removeToken(
        address _from
    ) 
        public
        onlyOwner()
    {
        delete tokens[_from];
    }

    function computePrice(
        address _token,
        uint256 _amount
    ) 
        public
        view
        returns (uint256)
    {
       uint256 decimals = ERC20(_token).decimals();
       uint256 price = prices[_token];
       return _amount * price / 10 ** decimals;
    }

    function hasOverride(
        address _token
    ) 
        public
        view
        returns (bool)
    {
       return prices[_token] != 0;
    }

    function replaceToken(
        address _token,
        int256 _amount
    )
        public
        view
        returns (address, int256) 
    {
        address targetAddress = tokens[_token];
        uint256 sourceDecimals = ERC20(_token).decimals();
        uint256 targetDecimals = ERC20(targetAddress).decimals();

        int256 adjustedAmount = _amount;
        if (sourceDecimals > targetDecimals) {
            adjustedAmount = _amount / int256((10 ** (sourceDecimals - targetDecimals)));
        } else {
            adjustedAmount = _amount * int256((10 ** (targetDecimals - sourceDecimals)));
        }
        return (targetAddress, adjustedAmount);
    }

    function hasTokenOverride(
        address _token
    ) 
        public
        view
        returns (bool)
    {
       return tokens[_token] != address(0);
    }
}
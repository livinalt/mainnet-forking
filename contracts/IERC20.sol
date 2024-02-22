// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IERC20{
    function approve(address _spender, uint _value) external;
    function balanceOf(address who) external view returns(uint256 balance); 
   // extra functions
    function transferFrom(address sender, address recipient, uint256 amount) external;
    function increaseAllowance(address spender, uint256 addedValue) external;
    function decreaseAllowance(address spender, uint256 subtractedValue) external;
    function _transfer(address sender, address recipient, uint256 amount) external;
    function _mint(address account, uint256 amount) external;
    function _burn(address account, uint256 amount) external;
    function _approve(address owner, address spender, uint256 amount) external;
    function _burnFrom(address account, uint256 amount) external ;
}
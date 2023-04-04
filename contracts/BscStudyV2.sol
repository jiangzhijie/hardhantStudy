// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract BscStudyV2{

      uint256 public amount;

      string public constant version="V2"; 

      function addAmount()public returns(uint256){
        amount=amount+1;
        return amount;
      }
      

      function subtract()public returns(uint256){
        require(amount>0,"amount Must be greater than 0");
        amount=amount-1;
        return amount;
      }

      function clean()public returns(uint256){
        amount=0;
        return amount;
      }

}
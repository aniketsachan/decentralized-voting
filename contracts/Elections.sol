pragma solidity ^0.4.17;

contract Election {
    //Store candidate
    //Read Candidate
    string public candidate;
    //Constructor
    function Election () public {
        candidate = "Candidate 1";
    }
}

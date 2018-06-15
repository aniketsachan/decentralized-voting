pragma solidity ^0.4.17;

contract Election {
    // Model a candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // Fetch Candidate
    mapping (uint => Candidate) public candidates;

    // Store candidates count
    uint public candidatesCount;


    function Election () public {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate (string _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}

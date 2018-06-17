var Election = artifacts.require("./Election.sol");

contract( "Election", function(accounts)  {
    var electionInstance;

    it("initializes with two candidates", function() {
        return Election.deployed().then(function(instance) {
            return instance.candidatesCount();
        }).then(function(count) {
            assert.equal(count, 2);
        });
    });

    it("it initializes the candidate with correct values", function() {
        return Election.deployed().then(function(instance) {
            electionInstance = instance;
            return electionInstance.candidate(1);
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, "contains the correct id");
            assert.equal(candidate[1], 'Candidate 1', "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct voteCount");
            return electionInstance.candidate(2);
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, "contains the correct id");
            assert.equal(candidate[1], 'Candidate 2', "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct voteCount");
    });
});

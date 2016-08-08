contract Register{
    mapping (address => uint) members;
    uint numMembers;

    function Register(){
        // Constructor
        numMembers = 0;
    }

    function isMember(address _memAddress){
        if (members[_memAddress] != 0){
            // TODO: this should be an event
            throw;
        }
    }

    function addMember(address _memAddress, uint _memId){
        isMember(_memAddress);
        members[_memAddress] = _memId;
        numMembers += 1;
    }

    function modifyMember( address _memAddress, uint _memId){
        isMember(_memAddress);
        members[_memAddress] = _memId;
    }

    function getMemberId(address _memAddress) returns(uint){
        return members[_memAddress];
    }

    function getNumMembers() returns(uint){
        return numMembers;
    }

}

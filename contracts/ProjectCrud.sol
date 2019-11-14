pragma solidity ^0.4.6;

contract ProjectCrud {

  struct ProjectStruct {
    address myaddr;
    string project_title;
    string project_name;
    string project_short_name;
    uint target_amount;
    string project_category;
    string end_date;
    string creator_name;
    string creator_intro;
    string social_networks;
    uint index;
  }
  
  mapping(address => ProjectStruct) private projectStruct;
  address[] private projectIndex;

  event LogNewUser   (address indexed userAddress, uint index, bytes32 userEmail, uint userAge);
  event LogUpdateUser(address indexed userAddress, uint index, bytes32 userEmail, uint userAge);
  event LogDeleteUser(address indexed userAddress, uint index);
  
  function isProject(address _myaddr)
    public 
    constant
    returns(bool _isIndeed) 
  {
    if(projectIndex.length == 0) return false;
    return (projectIndex[projectStruct[_myaddr].index] == _myaddr);
  }

  function insertProject(
    address _myaddr, 
    string _project_title,
    string _project_name,
    string _project_short_name,
    uint _target_amount,
    string _project_category,
    string _end_date,
    string _creator_name,
    string _creator_intro,
    string _social_networks) 
    public
    returns(uint _index)
  {
    if(isUser(_myaddr)) throw; 
    projectStruct[_myaddr].project_title = _project_title;
    userStructs[userAddress].index     = userIndex.push(userAddress)-1;
    LogNewUser(
        userAddress, 
        userStructs[userAddress].index, 
        userEmail, 
        userAge);
    return userIndex.length-1;
  }

  function deleteUser(address userAddress) 
    public
    returns(uint index)
  {
    if(!isUser(userAddress)) throw; 
    uint rowToDelete = userStructs[userAddress].index;
    address keyToMove = userIndex[userIndex.length-1];
    userIndex[rowToDelete] = keyToMove;
    userStructs[keyToMove].index = rowToDelete; 
    userIndex.length--;
    LogDeleteUser(
        userAddress, 
        rowToDelete);
    LogUpdateUser(
        keyToMove, 
        rowToDelete, 
        userStructs[keyToMove].userEmail, 
        userStructs[keyToMove].userAge);
    return rowToDelete;
  }
  
  function getUser(address userAddress)
    public 
    constant
    returns(bytes32 userEmail, uint userAge, uint index)
  {
    if(!isUser(userAddress)) throw; 
    return(
      userStructs[userAddress].userEmail, 
      userStructs[userAddress].userAge, 
      userStructs[userAddress].index);
  } 
  
  function updateUserEmail(address userAddress, bytes32 userEmail) 
    public
    returns(bool success) 
  {
    if(!isUser(userAddress)) throw; 
    userStructs[userAddress].userEmail = userEmail;
    LogUpdateUser(
      userAddress, 
      userStructs[userAddress].index,
      userEmail, 
      userStructs[userAddress].userAge);
    return true;
  }
  
  function updateUserAge(address userAddress, uint userAge) 
    public
    returns(bool success) 
  {
    if(!isUser(userAddress)) throw; 
    userStructs[userAddress].userAge = userAge;
    LogUpdateUser(
      userAddress, 
      userStructs[userAddress].index,
      userStructs[userAddress].userEmail, 
      userAge);
    return true;
  }

  function getUserCount() 
    public
    constant
    returns(uint count)
  {
    return userIndex.length;
  }

  function getUserAtIndex(uint index)
    public
    constant
    returns(address userAddress)
  {
    return userIndex[index];
  }

}
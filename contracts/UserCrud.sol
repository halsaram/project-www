pragma solidity ^0.4.6;

contract UserCrud {

  struct UserStruct {
    address myAddr;
    string userEmail;
    string userName;
    int userPoint;
    uint index;
  }
  
  mapping(address => UserStruct) private userStructs;
  mapping(string => UserStruct) private addrStructs;
  address[] private userIndex;

  event LogNewUser   (address indexed userAddress, uint index, string userEmail, string userName, int userPoint);
  event LogUpdateUser(address indexed userAddress, uint index, string userEmail, string userName);
  event LogDeleteUser(address indexed userAddress, uint index);
  
  function isUser(address userAddress)
    public 
    constant
    returns(bool isIndeed) 
  {
    if(userIndex.length == 0) return false;
    return (userIndex[userStructs[userAddress].index] == userAddress);
  }

  function isMyaddr(string userEmail)
    public 
    constant
    returns(bool isIndeed) 
  {
    if(userIndex.length == 0) return false;
    return (userIndex[userStructs[addrStructs[userEmail].myAddr].index] == addrStructs[userEmail].myAddr);
  }

  function insertUser(
    address userAddress, 
    string userEmail, 
    string userName,
    int    userPoint)
    public
    returns(uint index)
  {
    if(isUser(userAddress)) throw;
    addrStructs[userEmail].myAddr = userAddress;
    userStructs[userAddress].userEmail = userEmail;
    userStructs[userAddress].userName   = userName;
    userStructs[userAddress].userPoint   = userPoint;
    userStructs[userAddress].index     = userIndex.push(userAddress)-1;
    LogNewUser(
        userAddress, 
        userStructs[userAddress].index, 
        userEmail, 
        userName,
        userPoint);
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
        userStructs[keyToMove].userName);
    return rowToDelete;
  }
  
  function getUser(address userAddress)
    public 
    constant
    returns(address myAddr, string userEmail, string userName, int userPoint, uint index)
  {
    if(!isUser(userAddress)) throw; 
    return(
      addrStructs[userStructs[userAddress].userEmail].myAddr,
      userStructs[userAddress].userEmail,
      userStructs[userAddress].userName, 
      userStructs[userAddress].userPoint, 
      userStructs[userAddress].index);
  }

  function getMyaddr(string userEmail)
    public 
    constant
    returns(address myAddr)
  {
    if(!isMyaddr(userEmail)) throw; 
    return addrStructs[userEmail].myAddr;
  }
  
  function updateUserEmail(address userAddress, string userEmail) 
    public
    returns(bool success) 
  {
    if(!isUser(userAddress)) throw; 
    userStructs[userAddress].userEmail = userEmail;
    LogUpdateUser(
      userAddress, 
      userStructs[userAddress].index,
      userEmail, 
      userStructs[userAddress].userName);
    return true;
  }
  
  function updateUserAge(address userAddress, string userName) 
    public
    returns(bool success) 
  {
    if(!isUser(userAddress)) throw; 
    userStructs[userAddress].userName = userName;
    LogUpdateUser(
      userAddress, 
      userStructs[userAddress].index,
      userStructs[userAddress].userEmail, 
      userName);
    return true;
  }
  
  function updateUserPoint(address userAddress, int userPoint) 
    public
    returns(bool success) 
  {
    if(!isUser(userAddress)) throw; 
    require(userStructs[userAddress].userPoint + userPoint >= 0);
    userStructs[userAddress].userPoint += userPoint;
    
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
pragma solidity ^0.4.6;

contract ProjectCrud {

  struct ProjectStruct {
    address myaddr;
    string large_title;
    string short_title;
    string project_name;
    uint target_amount;
    string category;
    string end_date;
    string creator_name;
    string creator_intro;
    string fb_url;
    string ig_url;
    uint index;
  }
  
  mapping(address => ProjectStruct) private projectStruct;
  address[] private projectIndex;

  event LogNewUser (
    address indexed myaddr,
    uint index,
    string large_title,
    string short_title,
    string project_name,
    uint target_amount,
    string category,
    string end_date,
    string creator_name,
    string creator_intro,
    string fb_url,
    string ig_url);
  event LogUpdateUser(
    address indexed myaddr,
    uint index,
    string large_title,
    string short_title,
    string project_name,
    uint target_amount,
    string category,
    string end_date,
    string creator_name,
    string creator_intro,
    string fb_url,
    string ig_url);
  event LogDeleteUser(address indexed myaddr, uint index);
  
  function isProject(address myaddr)
    public 
    constant
    returns(bool isIndeed) 
  {
    if(projectIndex.length == 0) return false;
    return (projectIndex[projectStruct[myaddr].index] == myaddr);
  }

  function insertProject(
    address myaddr, 
    string large_title,
    string short_title,
    string project_name,
    uint target_amount,
    string category,
    string end_date,
    string creator_name,
    string creator_intro,
    string fb_url,
    string ig_url) 
    public
    returns(uint index)
  {
    if(isProject(myaddr)) throw; 
    projectStruct[myaddr].large_title = large_title;
    projectStruct[myaddr].short_title = short_title;
    projectStruct[myaddr].project_name = project_name;
    projectStruct[myaddr].target_amount = target_amount;
    projectStruct[myaddr].category = category;
    projectStruct[myaddr].end_date = end_date;
    projectStruct[myaddr].creator_name = creator_name;
    projectStruct[myaddr].creator_intro = creator_intro;
    projectStruct[myaddr].fb_url = fb_url;
    projectStruct[myaddr].ig_url = ig_url;
    projectStruct[myaddr].index = projectIndex.push(myaddr)-1;
    LogNewUser(
        myaddr,
        projectStruct[myaddr].index,
        large_title,
        short_title,
        project_name,
        target_amount,
        category,
        end_date,
        creator_name,
        creator_intro,
        fb_url,
        ig_url);
    return projectIndex.length-1;
  }

  function deleteProject(address myaddr) 
    public
    returns(uint index)
  {
    if(!isProject(myaddr)) throw; 
    uint rowToDelete = projectStruct[myaddr].index;
    address keyToMove = projectIndex[projectIndex.length-1];
    projectIndex[rowToDelete] = keyToMove;
    projectStruct[keyToMove].index = rowToDelete; 
    projectIndex.length--;
    LogDeleteUser(
        myaddr, 
        rowToDelete);
    LogUpdateUser(
        keyToMove, 
        rowToDelete, 
        projectStruct[myaddr].large_title,
        projectStruct[myaddr].short_title,
        projectStruct[myaddr].project_name,
        projectStruct[myaddr].target_amount,
        projectStruct[myaddr].category,
        projectStruct[myaddr].end_date,
        projectStruct[myaddr].creator_name,
        projectStruct[myaddr].creator_intro,
        projectStruct[myaddr].fb_url,
        projectStruct[myaddr].ig_url);
    return rowToDelete;
  }
  
  function getProject(address myaddr)
    public 
    constant
    returns(
      string large_title,
      string short_title,
      string project_name,
      uint target_amount,
      string category,
      string end_date,
      string creator_name,
      string creator_intro,
      string fb_url,
      string ig_url,
      uint index
    )
  {
    if(!isProject(myaddr)) throw; 
    return(
      projectStruct[myaddr].large_title,
      projectStruct[myaddr].short_title,
      projectStruct[myaddr].project_name,
      projectStruct[myaddr].target_amount,
      projectStruct[myaddr].category,
      projectStruct[myaddr].end_date,
      projectStruct[myaddr].creator_name,
      projectStruct[myaddr].creator_intro,
      projectStruct[myaddr].fb_url,
      projectStruct[myaddr].ig_url,
      projectStruct[myaddr].index);
  } 

  function getProjectCount() 
    public
    constant
    returns(uint count)
  {
    return projectIndex.length;
  }

  function getProjectAtIndex(uint index)
    public
    constant
    returns(address myaddr)
  {
    return projectIndex[index];
  }

}
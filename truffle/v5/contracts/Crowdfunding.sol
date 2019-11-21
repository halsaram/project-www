// We will be using Solidity version 0.5.4
pragma solidity ^0.5.4;
// Importing OpenZeppelin's SafeMath Implementation
import './SafeMath.sol';


contract Crowdfunding {
    using SafeMath for uint256;

    // List of existing projects
    Project[] private projects;

    // Event that will be emitted whenever a new project is started
    event ProjectStarted(
        address contractAddress,
        address projectStarter,
        string summary,
        string gift,
        string story,
        uint256 deadline,
        uint256 goalAmount
    );

    /** @dev Function to start a new project.
      * @param summary Title of the project to be created
      * @param gift Brief description about the project
      * @param story Brief description about the project
      * @param durationInDays Project deadline in days
      * @param amountToRaise Project goal in wei
      */
    function startProject(
        string calldata summary,
        string calldata gift,
        string calldata story,
        uint durationInDays,
        uint amountToRaise,
        address payable _addr
    ) external {
        uint raiseUntil = now.add(durationInDays.mul(1 days));
        Project newProject = new Project(_addr, summary, gift, story, raiseUntil, amountToRaise);
        projects.push(newProject);
        emit ProjectStarted(
            address(newProject),
            _addr,
            summary,
            gift,
            story,
            raiseUntil,
            amountToRaise
        );
    }                                                                                                                                   

    /** @dev Function to get all projects' contract addresses.
      * @return A list of all projects' contract addreses
      */
    function returnAllProjects() external view returns(Project[] memory){
        return projects;
    }
}


contract Project {
    using SafeMath for uint256;
    
    // Data structures
    enum State {
        Fundraising,
        Expired,
        Successful
    }

    // State variables
    address payable public creator;
    uint public amountGoal; // required to reach at least this much, else everyone gets refund
    uint public completeAt;
    uint256 public currentBalance;
    uint public raiseBy;
    string public summary;
    string public gift;
    string public story;
    State public state = State.Fundraising; // initialize on create
    mapping (address => uint) public contributions;

    // Event that will be emitted whenever funding will be received
    event FundingReceived(address contributor, uint amount, uint currentTotal);
    // Event that will be emitted whenever the project starter has received the funds
    event CreatorPaid(address recipient);

    // Modifier to check current state
    modifier inState(State _state) {
        require(state == _state);
        _;
    }

    // Modifier to check if the function caller is the project creator
    modifier isCreator() {
        require(msg.sender == creator);
        _;
    }

    constructor
    (
        address payable projectStarter,
        string memory projectSummary,
        string memory projectGift,
        string memory projectStory,
        uint fundRaisingDeadline,
        uint goalAmount
    ) public {
        creator = projectStarter;
        summary = projectSummary;
        gift = projectGift;
        story = projectStory;
        amountGoal = goalAmount;
        raiseBy = fundRaisingDeadline;
        currentBalance = 0;
    }

    /** @dev Function to fund a certain project.
      */
    function contribute(address _addr, uint _value) external inState(State.Fundraising) payable {
        require(_addr != creator);
        contributions[_addr] = contributions[_addr].add(_value);
        currentBalance = currentBalance.add(_value);
        emit FundingReceived(_addr, _value, currentBalance);
        checkIfFundingCompleteOrExpired();
    }

    /** @dev Function to change the project state depending on conditions.
      */
    function checkIfFundingCompleteOrExpired() public {
        // if (currentBalance >= amountGoal) {
        //     state = State.Successful;
        //     payOut();
        // } else 
        if (now > raiseBy)  {
            if (currentBalance >= amountGoal) {
                 state = State.Successful;
            }
            state = State.Expired;
        }
        completeAt = now;
    }

    /** @dev Function to give the received funds to project starter.
      */
    function payOut() internal inState(State.Successful) returns (bool) {
        uint256 totalRaised = currentBalance;
        currentBalance = 0;

        if (creator.send(totalRaised)) {
            emit CreatorPaid(creator);
            return true;
        } else {
            currentBalance = totalRaised;
            state = State.Successful;
        }

        return false;
    }

    /** @dev Function to retrieve donated amount when a project expires.
      */
    function getRefund(address payable _addr) public inState(State.Expired) returns (bool) {
        require(contributions[_addr] > 0);

        uint amountToRefund = contributions[_addr];
        contributions[_addr] = 0;

        if (!_addr.send(amountToRefund)) {
            contributions[_addr] = amountToRefund;
            return false;
        } else {
            currentBalance = currentBalance.sub(amountToRefund);
        }

        return true;
    }

    /** @dev Function to get specific information about the project.
      * @return Returns all the project's details
      */
    function getDetails() public view returns 
    (
        address payable projectStarter,
        string memory projectSummary,
        string memory projectGift,
        string memory projectStory,
        uint256 deadline,
        State currentState,
        uint256 currentAmount,
        uint256 goalAmount
    ) {
        projectStarter = creator;
        projectSummary = summary;
        projectGift = gift;
        projectStory = story;
        deadline = raiseBy;
        currentState = state;
        currentAmount = currentBalance;
        goalAmount = amountGoal;
    }
}

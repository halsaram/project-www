pragma solidity ^0.4.8;

contract HalCoin {
    // (1) 상태 변수 선언
    string public name; // 토큰 이름
    string public symbol; // 토큰 단위
    uint8 public decimals; // 소수점 이하 자릿수
    uint256 public totalSupply; // 토큰 종량

    mapping (address => uint256) private balanceOf; // 각 주소의 잔고

    // (2) 이벤트 알림
    event Transfer(address indexed from, address indexed to, uint256 value);

    // (3) 생성자
    function halCoin(address _myaddr, uint256 _supply, string _name, string _symbol, uint8 _decimals)
    {
        balanceOf[_myaddr] = _supply;
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _supply;
    }

    // (4) 송금
    function transfer(address _myaddr, address _to, uint256 _value)
    {
        // (5) 부정 송금 확인
        if (balanceOf[_myaddr] < _value) throw;
        if (balanceOf[_to] + _value < balanceOf[_to]) throw;
        // (6) 송금하는 주소와 송금받는 주소의 잔고 갱신
        balanceOf[_myaddr] -= _value;
        balanceOf[_to] += _value;
        // (7) 이벤트 알림
        Transfer(_myaddr, _to, _value);
    }
}
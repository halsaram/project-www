import React, { useState } from 'react';
import useInputs from '../useinput';

const Oninput = () => {
  const [state, onChange] = useInputs({
      mail: '',
      passwd:''
  });
    const {mail, passwd} = state;

  return (
    <div>
      <div>
        <p>이메일</p><input name='mail' value={mail} onChange={onChange} placeholder="이메일 주소 입력" />
         <p>비밀번호</p><input name='passwd' value={passwd} onChange={onChange}  placeholder="비밀번호 입력" />
      </div>
    </div>
  );
};

export default Oninput;

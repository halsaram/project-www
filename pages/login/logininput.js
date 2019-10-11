import React, { useState } from 'react';
import useInputs from '../useinput';

const Logininput = () => {
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

const Joininput = () => {
  const [state, onChange] = useInputs({
      name: '',
      mail: '',
      mail1:'',
      passwd:'',
      passwd1:''
  });
    const {name, mail,mail1, passwd, passwd1} = state;

  return (
    <div>
      <div>
        <p>이름</p><input name='name' value={name} onChange={onChange} placeholder="이름 입력" />
        <p>이메일</p><input name='mail' value={mail} onChange={onChange} placeholder="이메일 주소 입력" />
        <input name='mail1' value={mail1} onChange={onChange} placeholder="이메일 주소 확인" />
        <p>비밀번호</p><input name='passwd' value={passwd} onChange={onChange}  placeholder="비밀번호 입력" />
        <input name='passwd1' value={passwd1} onChange={onChange}  placeholder="비밀번호 확인" />
      </div>
    </div>
  );
};

export {Joininput, Logininput};

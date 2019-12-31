import React, { useState } from 'react';
import { login } from '../../action/User/ActionCreator';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const [inputUserId, setInputUserState] = useState('');
  const dispatch = useDispatch();
  const onInputUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUserState(e.currentTarget.value)
  }

  const onClick = () => {
    dispatch(login.success({ id: inputUserId }));
    setInputUserState('');
  }

  return (
    <div>
      <input type="text" value={inputUserId} onChange={onInputUserIdChange} />
      <button onClick={onClick}>ログイン</button>
    </div>
  )
}

export default LoginPage
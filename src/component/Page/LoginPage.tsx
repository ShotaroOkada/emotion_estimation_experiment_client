import React, { useState } from 'react';
import { login } from '../../action/User/ActionCreator';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [inputUserId, setInputUserState] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const onInputUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUserState(e.currentTarget.value)
  }

  const onClick = () => {
    if (inputUserId === '') return;

    dispatch(login.success({ id: inputUserId }));
    history.push('/');
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
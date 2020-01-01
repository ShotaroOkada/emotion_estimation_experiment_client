import React, { useState } from 'react';
import { login } from '../../action/User/ActionCreator';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [inputUserId, setInputUserState] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const handleInputUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUserState(e.currentTarget.value)
  }

  const onClick = () => {
    if (inputUserId === '') return;
    dispatch(login.success({ id: inputUserId }));
    sessionStorage.setItem('userId', inputUserId);
    history.push('/');
    setInputUserState('');
  }

  return (
    <div>
      <input type="text" value={inputUserId} onChange={handleInputUserIdChange} />
      <button onClick={onClick}>ログイン</button>
    </div>
  )
}

export default LoginPage
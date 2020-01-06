import React, { useState, useEffect } from 'react';
import { login } from '../../action/User/ActionCreator';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RootState from '../../state';

const LoginPage: React.FC = () => {
  const [inputUserId, setInputUserState] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector<RootState, RootState['user']['isLoggedIn']>(state => state.user.isLoggedIn);
  const handleInputUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUserState(e.currentTarget.value)
  }

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/')
    }
  })

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
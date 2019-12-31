import React from 'react';
import { useSelector } from 'react-redux';
import RootState from '../../state';
import { Redirect } from 'react-router-dom';

const InputPage = () => {
  const isLoggedIn = useSelector<RootState, RootState['user']['isLoggedIn']>(state => state.user.isLoggedIn);

  return (
    <div>
      {!isLoggedIn && <Redirect to={'/login'} />}
      input page
    </div>
  )
}

export default InputPage
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RootState from '../../state';
import { Redirect } from 'react-router-dom';
import Forms from '../Molecule/Forms';
import { getTexts } from '../../action/Texts/ActionCreator';

const InputPage: React.FC = () => {
  const isLoggedIn = useSelector<RootState, RootState['user']['isLoggedIn']>(state => state.user.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTexts.request())
  })
  return (
    <div>
      {!isLoggedIn && <Redirect to={'/login'} />}
      input page
      <Forms />
    </div>
  )
}

export default InputPage
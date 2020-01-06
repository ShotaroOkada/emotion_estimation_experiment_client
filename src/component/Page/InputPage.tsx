import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RootState from '../../state';
import { Redirect } from 'react-router-dom';
import { getTexts } from '../../action/Texts/ActionCreator';
import TextInputArea from '../Organisms/TextInputArea';

const InputPage: React.FC = () => {
  const isLoggedIn = useSelector<RootState, RootState['user']['isLoggedIn']>(state => state.user.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTexts.request())
  })
  return (
    <div>
      {!isLoggedIn && <Redirect to={'/login'} />}
      <TextInputArea />
    </div>
  )
}

export default InputPage
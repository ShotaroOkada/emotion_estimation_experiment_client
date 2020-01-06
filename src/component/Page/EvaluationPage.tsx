import React, { useEffect } from 'react';
import EmotionEvaluationArea from '../Organisms/EmotionEvaluationArea'
import { useSelector } from 'react-redux';
import RootState from '../../state';
import { useHistory } from 'react-router-dom';

const EvaluationPage: React.FC = () => {
  const isLoading = useSelector<RootState, RootState['emotions']['isLoading']>(state => state.emotions.isLoading);
  const texts = useSelector<RootState, RootState['texts']>(state => state.texts);
  const history = useHistory();
  useEffect(() => {
    if (!texts.length) {
      history.push('/login');
    }
  })
  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  } else {
    return (
      <div>
        <EmotionEvaluationArea />
      </div>
    )
  }
}

export default EvaluationPage
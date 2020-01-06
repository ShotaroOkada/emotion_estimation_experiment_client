import React from 'react';
import EmotionEvaluationArea from '../Organisms/EmotionEvaluationArea'
import { useSelector } from 'react-redux';
import RootState from '../../state';

const EvaluationPage: React.FC = () => {
  const isLoading = useSelector<RootState, RootState['emotions']['isLoading']>(state => state.emotions.isLoading)
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
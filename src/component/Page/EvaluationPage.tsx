import React from 'react';
import { useSelector } from 'react-redux';
import RootState from '../../state';

const EvaluationPage: React.FC = () => {
  const emotions = useSelector<RootState, RootState['emotions']>(state => state.emotions)
  return (
    <div>
      <div>{emotions['nlu_algo'].text}</div>
      {Object.entries(emotions).map(([key, value]) => {
        return (
          <div key={key}>
            {value.emotion_name}
          </div>
        )
      })}
    </div>
  )
}

export default EvaluationPage
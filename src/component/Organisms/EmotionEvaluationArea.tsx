import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RootState from '../../state';
import SelectBox, { Option } from '../Atom/SelectBox';
import { ValueType } from 'react-select/src/types';
import Button from '../Atom/Button';
import { PostEvaluationsParam } from '../../api/Evaluations/PostEvaluationApi';
import { AlgoName } from '../../state/Emotions';
import { postEvaluations } from '../../action/Evaluations/ActionCreator';

type SelectedOptions = {
  [algo_name in AlgoName]: Option
}

const EmotionEvaluationArea = () => {
  const estimatedEmotions = useSelector<RootState, RootState['emotions']['estimatedEmotions']>(state => state.emotions.estimatedEmotions)
  const dispatch = useDispatch();
  const initialSelectedOption: SelectedOptions = {
    nlu_algo: {
      algo_name: null,
      value: null,
      label: null
    },
    emotion_parameter_algo: {
      algo_name: null,
      value: null,
      label: null
    },
    feedback_algo: {
      algo_name: null,
      value: null,
      label: null
    }
  };
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>(initialSelectedOption)
  const handleChange = (selectedOption: ValueType<Option>) => {
    setSelectedOptions({
      ...selectedOptions, [(selectedOption as Option).algo_name as string]: selectedOption as Option
    })
  }
  const onClick = () => {
    if (Object.keys(selectedOptions).length !== Object.keys(estimatedEmotions).length) return;
    const postEvaluationsParam: PostEvaluationsParam = {
      nlu_algo: {
        text: estimatedEmotions['nlu_algo'].text,
        previous_flag: estimatedEmotions['nlu_algo'].previous_flag,
        emotion_category: estimatedEmotions['nlu_algo'].emotion_category,
        emotion_name: estimatedEmotions['nlu_algo'].emotion_name,
        evaluation_id: selectedOptions['nlu_algo'].value as string,
      },
      emotion_parameter_algo: {
        text: estimatedEmotions['emotion_parameter_algo'].text,
        previous_flag: estimatedEmotions['emotion_parameter_algo'].previous_flag,
        emotion_category: estimatedEmotions['emotion_parameter_algo'].emotion_category,
        emotion_name: estimatedEmotions['emotion_parameter_algo'].emotion_name,
        evaluation_id: selectedOptions['emotion_parameter_algo'].value as string,
      },
      feedback_algo: {
        text: estimatedEmotions['feedback_algo'].text,
        previous_flag: estimatedEmotions['feedback_algo'].previous_flag,
        emotion_category: estimatedEmotions['feedback_algo'].emotion_category,
        emotion_name: estimatedEmotions['feedback_algo'].emotion_name,
        evaluation_id: selectedOptions['feedback_algo'].value as string,
      }
    }
    dispatch(postEvaluations.request(postEvaluationsParam))
  }
  return (
    <div style={{ width: '30%' }}>
      <div>{estimatedEmotions['nlu_algo'].text}</div>
      {(Object.keys(estimatedEmotions) as Array<AlgoName>).map(key => {
        return (
          <div key={key}>
            {estimatedEmotions[key].emotion_name}
            <SelectBox algo_name={key} selectedOption={selectedOptions[key]} handleChange={handleChange} />
          </div>
        )
      })}
      <Button label={'評価を送信'} onClick={onClick} />
    </div>
  )
}

export default EmotionEvaluationArea
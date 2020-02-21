import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RootState from '../../state';
import SelectBox, { Option } from '../Atom/SelectBox';
import { ValueType } from 'react-select/src/types';
import Button from '../Atom/Button';
import { AlgoName } from '../../state/Emotions';
import { postEvaluations } from '../../action/Evaluations/ActionCreator';
import styled from 'styled-components';
import { FontSize, FontFamily } from '../../style/Font';

export type SelectedOptions = {
  feedback_algo: Option,
  nlu_algo?: Option,
  emotion_parameter_algo?: Option
}

const EmotionEvaluationArea = () => {
  const text = useSelector<RootState, RootState['emotions']['estimatedInfo']['text']>(state => state.emotions.estimatedInfo.text)
  const estimatedAlgorithms = useSelector<RootState, RootState['emotions']['estimatedInfo']['algorithms']>(state => state.emotions.estimatedInfo.algorithms)
  const dispatch = useDispatch();
  const initialSelectedOption: SelectedOptions = {
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
    if (Object.keys(selectedOptions).length !== Object.keys(estimatedAlgorithms).length) return;
    dispatch(postEvaluations.request(selectedOptions))
  }
  return (
    <div style={{ width: '30%' }}>
      <Text>{text}</Text>
      {(Object.keys(estimatedAlgorithms) as Array<AlgoName>).map(key => {
        return (
          <div key={key}>
            {estimatedAlgorithms[key]?.emotion_name}
            <SelectBox algo_name={key} selectedOption={selectedOptions[key] as Option} handleChange={handleChange} />
          </div>
        )
      })}
      <Button label={'評価を送信'} onClick={onClick} />
    </div>
  )
}

export default EmotionEvaluationArea

const Text = styled.div`
  font-size: ${FontSize.Medium};
  font-family: ${FontFamily.Roboto};
  text-align: center;
`
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RootState from '../../state';
import SelectBox, { Option } from '../Atom/SelectBox';
import { ValueType } from 'react-select/src/types';

type SelectedOptions = {
  [algo_name: string]: Option
}

const EmotionEvaluationArea = () => {
  const emotions = useSelector<RootState, RootState['emotions']>(state => state.emotions)
  const initialSelectedOption: SelectedOptions = {};
  Object.keys(emotions).forEach(algo_name => {
    initialSelectedOption[algo_name] = {
      algo_name: null,
      value: null,
      label: null
    }
  })
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>(initialSelectedOption)
  const handleChange = (selectedOption: ValueType<Option>) => {
    setSelectedOptions({
      ...selectedOptions, [(selectedOption as Option).algo_name as string]: selectedOption as Option
    })
  }
  return (
    <div style={{ width: '30%' }}>
      <div>{emotions['nlu_algo'].text}</div>
      {Object.entries(emotions).map(([key, value]) => {
        return (
          <div key={key}>
            {value.emotion_name}
            <SelectBox algo_name={key} selectedOption={selectedOptions[key]} handleChange={handleChange} />
          </div>
        )
      })}
    </div>
  )
}

export default EmotionEvaluationArea
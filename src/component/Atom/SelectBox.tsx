import React from 'react';
import { default as Select, ValueType } from 'react-select';
import { AlgoName } from '../../state/Emotions';

export type Option = {
  algo_name: AlgoName | null,
  value: string | null,
  label: string | null
}

type Props = {
  algo_name: AlgoName
  selectedOption: Option
  handleChange: (seletedOption: ValueType<Option>) => void
}

const SelectBox: React.FC<Props> = (props) => {
  const { selectedOption, algo_name, handleChange } = props
  const options: Option[] = [
    { algo_name: algo_name, value: 'appropriate', label: '適切' },
    { algo_name: algo_name, value: 'inappropriate', label: '適切でない' },
    { algo_name: algo_name, value: 'unknown', label: 'わからない' },
    { algo_name: algo_name, value: 'stronger', label: 'より強い感情' },
    { algo_name: algo_name, value: 'weaker', label: 'より弱い感情' },
  ]

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
    />
  )
}

export default SelectBox
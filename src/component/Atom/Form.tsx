import React from 'react'
import styled from 'styled-components'
import Color from '../../style/Color'
import { FontSize, FontFamily } from '../../style/Font'

type props = {
  key: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Form: React.FC<props> = (props) => {
  const { key, value, onChange } = props
  return (
    <Input type="text" key={key} name={key} value={value} onChange={onChange} />
  )
}

export default Form

const Input = styled.input`
  color: ${Color.LightGray};
  font-size: ${FontSize.Medium}px;
  font-family: ${FontFamily.Roboto};
  padding: 5px 7px 5px 3px;
  margin-right: 5px;
`
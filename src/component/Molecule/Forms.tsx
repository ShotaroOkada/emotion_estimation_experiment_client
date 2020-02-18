import React from 'react';
import styled from 'styled-components';
import Color from '../../style/Color';
import { FontSize, FontFamily } from '../../style/Font';

type Props = {
  inputTexts: {
    [key: string]: string
  },
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Forms: React.FC<Props> = (props) => {
  const { inputTexts, handleChange } = props

  return (
    <Container>
      {Object.entries(inputTexts).map(([key, value]) =>
        <Input type="text" key={key} name={key} value={value} onChange={handleChange} />
      )}
    </Container>
  )
}

export default Forms

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  width: 30%;
  color: ${Color.LightGray};
  font-size: ${FontSize.Medium}px;
  font-family: ${FontFamily.Roboto};
  padding: 5px 7px 5px 3px;
  margin-bottom: 5px;
`
import React from 'react';
import styled from 'styled-components';
import { FontSize, FontFamily } from '../../style/Font';
import Color from '../../style/Color';

type Props = {
  label: string,
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<Props> = (props) => {
  const { label, onClick } = props

  return (
    <StyledButton onClick={onClick}>{label}</StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  font-size: ${FontSize.Medium}px;
  color: ${Color.LightGray};
  font-family: ${FontFamily.Roboto};
  border-radius: 3px;
  text-decoration: none;
  padding: 5px 7px 3px 7px;
  &:focus {
    outline: none;
    background: ${Color.WhiteSmoke}
  }
  &:hover {
    background: ${Color.WhiteSmoke}
  }
`
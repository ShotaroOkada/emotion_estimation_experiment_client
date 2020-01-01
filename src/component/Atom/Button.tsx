import React from 'react';

type Props = {
  label: string,
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<Props> = (props) => {
  const { label, onClick } = props

  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default Button
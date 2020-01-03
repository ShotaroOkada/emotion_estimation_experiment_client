import React, { useState } from 'react';
import Forms from '../Molecule/Forms';
import Button from '../Atom/Button'
import { useDispatch } from 'react-redux';
import { addInputTextsRequest } from '../../action/Texts/ActionCreator';

const TextInputArea: React.FC = () => {
  const dispatch = useDispatch()
  const [inputTexts, setInputTexts] = useState({
    a: '', b: '', c: '', d: '', e: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTexts({ ...inputTexts, [e.target.name]: e.currentTarget.value })
  }

  const onClick = () => {
    dispatch(addInputTextsRequest(inputTexts))
  }

  return (
    <div>
      <Forms inputTexts={inputTexts} handleChange={handleChange} />
      <Button label={'送信'} onClick={onClick} />
    </div>
  )
}

export default TextInputArea
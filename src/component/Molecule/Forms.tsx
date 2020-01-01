import React, { useState } from 'react';

const Forms: React.FC = () => {
  const [inputForms, setInputForms] = useState({
    a: '', b: '', c: '', d: '', e: ''
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputForms({ ...inputForms, [e.target.name]: e.currentTarget.value })
  }

  return (
    <div>
      {Object.entries(inputForms).map(([key, value]) =>
        <input type="text" key={key} name={key} value={value} onChange={handleFormChange} />
      )}
    </div>
  )
}

export default Forms
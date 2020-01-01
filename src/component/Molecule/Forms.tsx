import React from 'react';

type Props = {
  inputTexts: {
    [key: string]: string
  },
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Forms: React.FC<Props> = (props) => {
  const { inputTexts, handleChange } = props

  return (
    <div>
      {Object.entries(inputTexts).map(([key, value]) =>
        <input type="text" key={key} name={key} value={value} onChange={handleChange} />
      )}
    </div>
  )
}

export default Forms
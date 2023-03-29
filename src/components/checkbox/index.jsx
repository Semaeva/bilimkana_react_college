import React, { useState } from 'react'

const Checkbox = ({ setValue }) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <img
      src={`/assets/icons/check-${isChecked ? 'on' : 'off'}.svg`}
      alt="check"
      className={'cursor-pointer'}
      onClick={() => {
        setValue(!isChecked)
        setIsChecked(!isChecked)
      }}
    />
  )
}

export default Checkbox

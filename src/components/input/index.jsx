import React from 'react'

const Input = ({ textarea = false, register, label, placeholder, type, isInvalid, ...props }) => {
  return (
    <div className={'input-box'}>
      <label>{label}</label>
      {textarea ? (
        <textarea
          rows="5"
          style={{ width: '100%', minWidth: '100%', maxWidth: '100%' }}
          {...register}
          className={`input ${isInvalid && 'invalid'}`}
          placeholder={placeholder}
          {...props}
        />
      ) : (
        <input
          onWheel={(e) => e.target.blur()}
          type={type || 'text'}
          {...register}
          className={`input ${isInvalid && 'invalid'}`}
          placeholder={placeholder}
          {...props}
        />
      )}
      {/*<input*/}
      {/*  onWheel={(e) => e.target.blur()}*/}
      {/*  // onScroll={(e) => e.preventDefault()}*/}
      {/*  type={type || 'text'}*/}
      {/*  {...register}*/}
      {/*  className={`input ${isInvalid && 'invalid'}`}*/}
      {/*  placeholder={placeholder}*/}
      {/*  {...props}*/}
      {/*/>*/}
    </div>
  )
}

export default Input

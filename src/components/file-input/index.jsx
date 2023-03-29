import React, { useState } from 'react'

const FileInput = ({ register_key, setValue, text }) => {
  const [name, setName] = useState('')
  const hiddenFileInput = React.useRef(null)
  const handleClick = () => {
    hiddenFileInput.current.click()
  }
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0]
    setValue(register_key, fileUploaded)
    console.log('file', fileUploaded)
    setName(event.target.files[0].name)
  }
  const deleteFile = () => {
    hiddenFileInput.current.type = 'text'
    hiddenFileInput.current.type = 'file'
    setValue(register_key, null)
    setName('')
  }
  return (
    <div className={'file-input_wrapper d-flex align-items-center gap-15 flex-wrap'}>
      <input
        accept="image/*,.doc,.docx,.txt,.pdf"
        type="file"
        className={'d-none'}
        ref={hiddenFileInput}
        onChange={handleChange}
      />
      <div className="d-flex align-items-center file-uploader cursor-pointer" onClick={handleClick}>
        <img src="/assets/icons/file.svg" alt="file-icon" />
        <p>{text}</p>
      </div>
      {!!name && (
        <div className="file-name d-flex align-items-center gap-5">
          <p>{name}</p>
          <img
            src="/assets/icons/file-close.svg"
            className={'cursor-pointer'}
            alt="close"
            onClick={deleteFile}
          />
        </div>
      )}
    </div>
  )
}

export default FileInput

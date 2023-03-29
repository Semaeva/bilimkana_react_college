import React, { useEffect, useRef } from 'react'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

const Modal = ({ isShown, setIsShown, children, forVacancies = false, styles = {} }) => {
  const ref = useRef(null)
  const handleClose = (e) => {
    e.stopPropagation()
    if (e.target.className.includes('modal-bg')) {
      setIsShown && setIsShown(false)
    }
  }
  useEffect(() => {
    if (isShown) {
      disableBodyScroll(ref)
    } else {
      clearAllBodyScrollLocks()
    }

    return clearAllBodyScrollLocks
  }, [isShown])
  return (
    <div
      ref={ref}
      className={`modal-bg ${forVacancies && 'vacancies_modal'}`}
      style={isShown ? styles : { display: 'none' }}
      onClick={!forVacancies ? handleClose : undefined}
    >
      <div className={`modal-wrapper`}>
        <img
          onClick={() => setIsShown(false)}
          src="/assets/icons/close.svg"
          alt="close-icon"
          className={'close cursor-pointer'}
        />

        {children}
      </div>
    </div>
  )
}

export default Modal

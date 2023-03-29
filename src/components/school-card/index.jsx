import React, { useState } from 'react'
import Modal from '@/components/modal'
import SchoolForm from '@/components/school-form'

const SchoolCard = ({ our_schools, phone, id, school, flag }) => {
  const [isShown, setIsShown] = useState(false)
  return (
    <>
      <div className={'school-card'}>
        <div className="school-title">
          <img src={flag} alt="country-flag" />
          <h3>{school?.title}</h3>
        </div>
        <div className="school-info">
          <div className="school-info_element">
            <img src="/assets/icons/location.svg" alt="loc" />
            <p>{school?.address}</p>
          </div>
          <div className="school-info_element">
            <img src="/assets/icons/phone.svg" alt="num" />
            <p>{phone}</p>
          </div>
        </div>
        <div className="school-buttons">
          <a href={`${school?.link}`} target={'_blank'} rel="noreferrer">
            <button className="over">{our_schools?.over}</button>
          </a>
          <button className="submit" onClick={() => setIsShown(true)}>
            {our_schools?.submit}
          </button>
        </div>
      </div>
      <Modal isShown={isShown} setIsShown={setIsShown}>
        <SchoolForm our_schools={our_schools} setIsShown={setIsShown} school={id} />
      </Modal>
    </>
  )
}

export default SchoolCard

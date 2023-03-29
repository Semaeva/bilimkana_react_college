import React, { useState } from 'react'
import { languages } from '@/localization/languages'
import Vacancies from '@/modules/vacancies'

const Contacts = ({ lang, contacts, certificates, vacancies = null, index, countries }) => {
  const [isShown, setIsShown] = useState(false)
  const { contacts_text } = languages[lang || 'en']
  const text = contacts[0].translations[lang || 'en']
  return (
    <>
      <section id={`section-${index}`} className={'contacts'}>
        {!isShown && (
          <>
            <h2>{contacts_text?.title}</h2>
            <footer>
              <div className="footer_box container">
                {contacts_text.description}
                <div className="footer_element">
                  <img src="/assets/icons/contact_email.svg" alt="email" />
                  <h4>{contacts_text.mail}</h4>
                  <p>{text?.email}</p>
                </div>
                <div className="footer_element">
                  <img src="/assets/icons/contact_phone.svg" alt="phone" />
                  <h4>{contacts_text.phone}</h4>
                  <p>{text?.phone}</p>
                </div>
                <div className="footer_element">
                  <img src="/assets/icons/contact_location.svg" alt="loc" />
                  <h4>{contacts_text.location}</h4>
                  <p>{text?.address}</p>
                </div>
              </div>
            </footer>
            <div
              className="d-flex align-items-center justify-content-center w-100"
              style={{ padding: '50px 0 150px' }}
            >
              <p
                className="orange cursor-pointer"
                style={{ textDecoration: 'underline' }}
                onClick={() => setIsShown(true)}
              >
                {contacts_text.job}
              </p>
            </div>
          </>
        )}
      </section>
      {isShown && (
        <Vacancies
          countries={countries}
          vacancies={vacancies}
          certificates={certificates}
          lang={lang}
          isShown={isShown}
          setIsShown={setIsShown}
        />
      )}
    </>
  )
}

export default Contacts

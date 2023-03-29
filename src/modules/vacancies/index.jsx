import React, { useEffect, useRef, useState } from 'react'
import Modal from '@/components/modal'
import { languages } from '@/localization/languages'
import ResumeForm from '@/components/resume-form'

const Vacancies = ({ vacancies, certificates, countries, lang, ...props }) => {
  const [active, setActive] = useState(!!countries?.length && countries[0].id)
  const [current, setCurrent] = useState(null)

  const { vacancies_text } = languages[lang || 'en']
  const ref = useRef()
  const { isShown, setIsShown } = props
  const mocked = [
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies,
    ...vacancies
  ]
  const checkIfClickedOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target) && !current) {
      setIsShown(false)
    }
  }
  useEffect(() => {
    setTimeout(() => {
      document.addEventListener('click', checkIfClickedOutside)
    }, 100)

    return () => document.removeEventListener('click', checkIfClickedOutside)
  }, [ref, current])

  return (
    <>
      <Modal {...props} forVacancies>
        {isShown && (
          <div ref={ref} className={'vacancies_wrapper'}>
            <div className="container">
              <h3>{vacancies_text.title}</h3>
              <div className="vacancy_btns">
                {countries.map((c) => (
                  <button
                    key={c.id}
                    className={active === c.id ? 'active' : ''}
                    onClick={() => setActive(c.id)}
                  >
                    {c.translations[lang || 'en'].title}
                  </button>
                ))}
              </div>
              <div className="vacancies-box">
                {mocked.map((vacancy) => (
                  <div
                    className="vacancy"
                    onClick={() => setCurrent(vacancy?.translations?.en?.title)}
                  >
                    <div className=" circle" />
                    <p>{vacancy.translations[lang].title}</p>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center">
                <button className="back-button" onClick={() => setIsShown(false)}>
                  Back
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
      <Modal styles={{ alignItems: 'flex-start' }} isShown={!!current} setIsShown={setCurrent}>
        <ResumeForm
          setIsShown={setCurrent}
          certificates={certificates}
          vacancy_title={current}
          fields_text={vacancies_text?.form_text}
        />
      </Modal>
    </>
  )
}

export default Vacancies

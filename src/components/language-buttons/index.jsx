import { useEffect, useState } from 'react'
import { useLanguage } from '@/utils/useLocal'

const LanguageButtons = ({ setLanguage }) => {
  const [currentLang, setLang] = useState('en')
  const languages = ['en', 'ru']
  const handleChange = (lang) => {
    if (lang !== currentLang) {
      setLang(lang)
      setLanguage(lang)
      localStorage.setItem('language', lang)
    }
  }
  useEffect(() => {
    handleChange(useLanguage())
  }, [])
  return (
    <div className={'d-flex gap-10 align-items-center'}>
      {languages.map((l) => (
        <span
          key={l}
          className={`cursor-pointer ${currentLang === l && 'orange'}`}
          onClick={() => handleChange(l)}
        >
          {l.toUpperCase()}
        </span>
      ))}
    </div>
  )
}

export default LanguageButtons

import LanguageButtons from '@/components/language-buttons'
import { languages } from '@/localization/languages'
const Header = ({ current, setCurrent, language, setLanguage }) => {
  const { header } = languages[language || 'en']
  return (
    <>
      <div className="header-bg"></div>
      <header>
        <nav className={'container header'}>
          <img
            className={'cursor-pointer'}
            onClick={() => setCurrent(0)}
            src={'./assets/logo.svg'}
            alt="logo"
          />

          <div className={'d-flex gap-15'}>
            {header.map((link, i) => (
              <p
                className={` cursor-pointer nav_link ${current === link.index && 'active'}`}
                onClick={() => {
                  setCurrent(link.index)
                }}
                key={i}
              >
                {link.title}
              </p>
            ))}
          </div>
          <div>
            <LanguageButtons setLanguage={setLanguage} />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header

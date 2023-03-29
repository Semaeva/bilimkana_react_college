import { languages } from '@/localization/languages'

const FirstScreen = ({ index, lang }) => {
  const { main_section } = languages[lang || 'en']
  // const inViewClass = currentIndex === index ? 'stable' : 'moved'
  return (
    <section id={`section-${index}`} className={'container first-section'}>
      <div className="d-flex justify-content-between gap-20" style={{ position: 'relative' }}>
        <div className={'first-section_photo-box'}>
          <img
            className={`photo {inViewClass}`}
            src="/assets/first-section/main-photo.png"
            alt="main-img"
          />
          <img
            className={`element {inViewClass}`}
            src="/assets/first-section/main-element.svg"
            alt="main-element"
          />
        </div>

        <div className={`first-section_text `}>
          <h1
          // className={inViewClass}
          >
            <span className={'orange'}>
              {main_section.orange_title} <br />{' '}
            </span>
            {main_section.title}
          </h1>
          <p
          // className={inViewClass}
          >
            <span className={'orange'}>{main_section.orange_description}</span>{' '}
            {main_section.description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default FirstScreen

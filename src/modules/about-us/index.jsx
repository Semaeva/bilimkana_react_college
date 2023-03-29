import React from 'react'
import { languages } from '@/localization/languages'
import AboutCard from '@/components/about-card'

const AboutUs = ({ currentIndex, about, graduates, index, lang }) => {
  const { about_us } = languages[lang || 'en']

  const inViewClass = currentIndex === index ? 'stable' : 'moved'
  // const mocked = [...graduates, ...graduates, ...graduates]
  console.log('gr', about)
  const aboutMocked = [...about, ...about, ...about, ...about, ...about, ...about]
  return (
    <section id={`section-${index}`} className={'container about-us'}>
      <div className="about-us_title-box gap-15 d-flex align-items-center justify-content-between">
        <h2>{about_us.title}</h2>
        <div className="graduates d-flex align-items-start justify-content-between">
          {graduates.map((gr, i) => (
            <div key={i} className="graduate">
              <div className="percent">
                <p>{gr.translations[lang || 'en']?.city_number_procent}%</p>
              </div>
              <span>{gr.translations[lang || 'en']?.city}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="about-us_nominations">
        {about.map((item, i) => (
          <AboutCard data={item.translations[lang || 'en']} key={i} />
        ))}
      </div>
    </section>
  )
}

export default AboutUs

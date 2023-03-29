import React from 'react'
import { languages } from '@/localization/languages'
import SchoolCard from '@/components/school-card'

const Schools = ({ currentIndex, schools, index, lang }) => {
  const { our_schools } = languages[lang || 'en']
  const mocked = [...schools, ...schools]
  const inViewClass = currentIndex === index ? 'stable' : 'moved'
  console.log('schools', schools)

  return (
    <section id={`section-${index}`} className={'container our-schools'}>
      <h2>{our_schools.title}</h2>
      <div className="d-flex gap-20">
        {mocked.map((school, i) => (
          <SchoolCard
            inView={inViewClass}
            key={i}
            our_schools={our_schools}
            id={school?.id}
            phone={school?.phone_number}
            flag={school?.country?.flag}
            school={school?.translations[lang || 'en']}
          />
        ))}
      </div>
    </section>
  )
}

export default Schools

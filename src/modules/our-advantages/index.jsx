import React from 'react'
import { languages } from '@/localization/languages'
import AdvantageCard from '@/components/advantage-card'

const OurAdvantages = ({ currentIndex, advantages, index, lang }) => {
  const { our_advantages } = languages[lang || 'en']
  const mocked = [...advantages, ...advantages]
  console.log('adv', mocked)
  const inViewClass = currentIndex === index ? 'stable' : 'moved'

  return (
    <section id={`section-${index}`} className={'container our-advantages'}>
      <h2>{our_advantages.title}</h2>
      <div className="d-flex gap-20">
        {advantages?.map((adv, i) => (
          <AdvantageCard index={i} inViewClass={inViewClass} lang={lang} key={i} advantage={adv} />
        ))}
      </div>
    </section>
  )
}

export default OurAdvantages

import React from 'react'
import { languages } from '@/localization/languages'

const AdvantageCard = ({ inViewClass, advantage, lang, index }) => {
  const { our_advantages } = languages[lang || 'en']

  console.log('advantage', advantage)
  return (
    <div className={`advantage ${inViewClass}`} style={{ transitionDelay: `0.${index + 6}s` }}>
      <img src={advantage.image} alt="advantage" />
      <div className="advantage_info">
        <h4>{our_advantages.card_title}</h4>
        <p>{advantage?.translations[lang || 'en'].title}</p>
      </div>
    </div>
  )
}

export default AdvantageCard

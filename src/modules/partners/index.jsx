import React from 'react'
import { languages } from '@/localization/languages'

const Partners = ({ lang, partners, index }) => {
  const { our_partners } = languages[lang || 'en']
  console.log('part', partners)
  const mocked = [
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners
  ]
  return (
    <section id={`section-${index}`} className={'container partners'}>
      <h2>{our_partners.title}</h2>

      <div className="partners-box">
        {mocked.map((partner, index) => (
          <div className={'partner'}>
            <img src={partner.image} alt={'partner-logo'} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Partners

import React from 'react'

const AboutCard = ({ data }) => {
  return (
    <div className={'about-card'}>
      <div className="circle">
        {' '}
        <span>{data.title}</span>
      </div>
      <b>{data.description}</b>
    </div>
  )
}

export default AboutCard

import { languages } from '@/localization/languages'

const OurMission = ({ index, lang }) => {
  const { our_mission } = languages[lang || 'en']

  return (
    <section id={`section-${index}`} className={'container our-mission'}>
      <h2>{our_mission.title}</h2>
      <div className="d-flex justify-content-between">
        <div className={'our-mission_text'}>
          <h3>{our_mission.subtitle}</h3>
          <p>{our_mission.description}</p>
        </div>
        <div className={'our-mission_img-wrapper'}>
          <img src="/assets/our-mission.png" alt="main-img" />
        </div>
      </div>
    </section>
  )
}

export default OurMission

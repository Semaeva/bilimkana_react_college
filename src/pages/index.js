import Head from 'next/head'
import Header from '@/layouts/header/header'
import { useEffect, useState } from 'react'
import FirstScreen from '@/modules/first-screen'
import OurMission from '@/modules/our-mission'
import { handleScroll, scrollFn } from '@/utils/scrollFn'
import { useScrollEvent } from '@/utils/useScrollEvent'
import OurAdvantages from '@/modules/our-advantages'
import {
  getAbout,
  getAdvantages,
  getCertificates,
  getContacts,
  getCountries,
  getGraduates,
  getPartners,
  getSchools,
  getVacancies
} from '@/api'
import AboutUs from '@/modules/about-us'
import Schools from '@/modules/schools'
import Partners from '@/modules/partners'
import { ToastContainer } from 'react-toastify'
import Contacts from '@/modules/contacts'

const data = [FirstScreen, OurAdvantages, AboutUs, Schools, OurMission, Partners, Contacts]
const Home = (props) => {
  const [language, setLanguage] = useState('en')
  const [loading, setLoading] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    scrollFn(`section-${current}`)
  }, [current])

  useScrollEvent(setLoading)

  return (
    <>
      <ToastContainer />
      <Head>
        <title>Bilimkana</title>
        <meta name="description" content="Bilimkana web site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        id={'main-container'}
        onScroll={() => !loading && handleScroll(data, current, loading, setCurrent)}
        style={{
          overflow: loading ? 'hidden' : 'auto',
          maxHeight: '100vh',
          pointerEvents: loading ? 'none' : 'all'
        }}
      >
        <div style={{ overflowX: 'hidden' }}>
          <img
            src="/assets/bg-images/light-white-circle.svg"
            alt="light-circle"
            className={'light-circle'}
          />
          <img
            src="/assets/bg-images/big-grey-circle-up.svg"
            alt="grey-circle"
            className={'grey-circle-up'}
          />
          <img
            src="/assets/bg-images/big-grey-circle.svg"
            alt="grey-circle"
            className={'grey-circle-down'}
          />
          <Header
            current={current}
            setCurrent={setCurrent}
            language={language}
            setLanguage={setLanguage}
          />
          {data.map((Item, index) => (
            <Item {...props} currentIndex={current} index={index} key={index} lang={language} />
          ))}
        </div>
      </main>
    </>
  )
}
export async function getStaticProps() {
  const advantages = await getAdvantages()
  const graduates = await getGraduates()
  const about = await getAbout()
  const schools = await getSchools()
  const partners = await getPartners()
  const contacts = await getContacts()
  const vacancies = await getVacancies()
  const countries = await getCountries()
  const certificates = await getCertificates()
  return {
    props: {
      advantages,
      graduates,
      about,
      schools,
      partners,
      contacts,
      vacancies,
      countries,
      certificates
    }
  }
}
export default Home

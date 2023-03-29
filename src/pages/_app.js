import '@/styles/globals.scss'
import '@/styles/custom-bootstrap.scss'
import '@/layouts/header/header.scss'
import '@/modules/first-screen/styles.scss'
import '@/modules/our-mission/styles.scss'
import '@/modules/our-advantages/styles.scss'
import '@/modules/about-us/styles.scss'
import '@/modules/schools/styles.scss'
import '@/modules/contacts/styles.scss'
import '@/modules/vacancies/styles.scss'
import '@/modules/partners/styles.scss'

import '@/components/advantage-card/styles.scss'
import '@/components/modal/styles.scss'
import '@/components/input/styles.scss'
import '@/components/school-form/styles.scss'
import '@/components/about-card/styles.scss'
import '@/components/school-card/styles.scss'
import '@/components/file-input/styles.scss'
import '@/components/resume-form/styles.scss'

import 'react-toastify/dist/ReactToastify.css'
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

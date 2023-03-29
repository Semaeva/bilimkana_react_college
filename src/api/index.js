import axios from 'axios'

export const request = async (url, method, payload, formData, params) => {
  const api = process.env.NEXT_PUBLIC_API_URL

  try {
    const res = await axios({
      url: `${api}${url}`,
      headers: {
        ...(formData && { 'Content-Type': 'multipart/form-data' })
      },
      method,
      data: formData || payload,
      params
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export async function getAdvantages() {
  return request(`advantages/list/`, 'GET')
}
export async function getGraduates() {
  return request(`graduates/list/`, 'GET')
}
export async function getAbout() {
  return request(`about/list/`, 'GET')
}
export async function getSchools() {
  return request(`school/list/`, 'GET')
}
export async function setCallback(data) {
  return request(`callback/list/`, 'POST', data)
}
export async function getPartners() {
  return request(`partner/list/`, 'GET')
}
export async function getContacts() {
  return request(`contacts/list/`, 'GET')
}
export async function getVacancies() {
  return request(`vacancy/list/`, 'GET')
}
export async function getCountries() {
  return request(`country/list/`, 'GET')
}
export async function getCertificates() {
  return request(`certificates/list/`, 'GET')
}

export async function setResume(data) {
  return request(`resume/list/`, 'POST', null, data)
}

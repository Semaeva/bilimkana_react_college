export const useLanguage = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.language) {
      return localStorage.language
    } else {
      localStorage.setItem('language', 'en')
    }
  }
  return 'en'
}

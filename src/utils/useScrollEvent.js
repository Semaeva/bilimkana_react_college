import { useEffect } from 'react'
import { Events } from 'react-scroll'

export const useScrollEvent = (setLoading) => {
  useEffect(() => {
    if (window !== undefined) {
      Events.scrollEvent.register('begin', () => {
        setLoading(true)
      })

      Events.scrollEvent.register('end', () => {
        setLoading(false)
      })
    }
  }, [])
}

import { scroller } from 'react-scroll'

export const scrollFn = (to) => {
  scroller.scrollTo(to, {
    duration: 1300,
    smooth: 'easeInOutSine',
    containerId: 'main-container',
    ignoreCancelEvents: true,
    offset: 1
  })
}

export const handleScroll = (data, current, loading, setCurrent) => {
  if (!window || loading) return
  const nextElem = !!data[current + 1] && document.querySelector(`#section-${current + 1}`)
  const prevElem = !!data[current - 1] && document.querySelector(`#section-${current - 1}`)

  const nextPosition = nextElem && {
    top: window.scrollY + nextElem.getBoundingClientRect().top,
    bottom: window.scrollY + nextElem.getBoundingClientRect().bottom
  }
  const prevPosition = prevElem && {
    top: window.scrollY + prevElem.getBoundingClientRect().top,
    bottom: window.scrollY + prevElem.getBoundingClientRect().bottom
  }

  const windowPosition = {
    top: window.scrollY,
    bottom: window.scrollY + document.documentElement.clientHeight
  }

  if (
    nextPosition &&
    windowPosition.bottom > nextPosition.top &&
    windowPosition.top < nextPosition.bottom
  ) {
    if (!loading) {
      // scrollFn(`section-${current + 1}`)

      setCurrent(current + 1)
    }
  } else if (
    prevPosition &&
    prevPosition.bottom > windowPosition.top &&
    prevPosition.top < windowPosition.bottom
  ) {
    if (!loading) {
      // scrollFn(`section-${current - 1}`)

      setCurrent(current - 1)
    }
  }
}

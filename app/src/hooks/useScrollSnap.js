import { useState, useEffect, useCallback } from 'react'

export default function useScrollSnap(containerRef) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollPos = container.scrollTop
      const slideHeight = window.innerHeight
      const index = Math.round(scrollPos / slideHeight)
      setActiveSlide(index)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [containerRef])

  const scrollToSlide = useCallback((index) => {
    const container = containerRef.current
    if (!container) return
    container.scrollTo({
      top: window.innerHeight * index,
      behavior: 'smooth',
    })
  }, [containerRef])

  return { activeSlide, scrollToSlide }
}

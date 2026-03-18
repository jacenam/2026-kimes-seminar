import { useRef } from 'react'
import { Network_3, DataConnected } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

export default function Slide01_Title() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s01-label', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s01-title', { opacity: 0, y: 30, duration: 0.7 }, '-=0.2')
      .from('.s01-subtitle', { opacity: 0, y: 20, duration: 0.6 }, '-=0.2')
      .from('.s01-footer', { opacity: 0, y: 20, duration: 0.5 }, '-=0.1')
      .from('.s01-icons', { opacity: 0, scale: 0.8, duration: 0.6 }, '-=0.3')
  })

  return (
    <SlideLayout id="slide-01" dark ref={ref}>
      {/* SVG grid background */}
      <svg
        className="grid-decoration"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid01" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid01)" opacity="0.06" />
        <circle cx="85%" cy="20%" r="120" fill="var(--color-primary)" opacity="0.08" />
        <circle cx="10%" cy="75%" r="80" fill="var(--color-primary)" opacity="0.05" />
        <circle cx="70%" cy="80%" r="50" fill="var(--color-primary)" opacity="0.06" />
      </svg>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p className="section-label s01-label" style={{ fontSize: '0.875rem', letterSpacing: '0.2em' }}>
          KIMES 2026 SEMINAR
        </p>

        <h1
          className="section-title s01-title"
          style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: 1.2 }}
        >
          2026년 병원 경영의{' '}
          <span style={{ color: 'var(--color-primary)' }}>뉴노멀</span>
        </h1>

        <p
          className="section-subtitle s01-subtitle"
          style={{ fontSize: '1.5rem', maxWidth: '600px' }}
        >
          데이터로 연결하는 의료 혁신의 미래
        </p>

        <div className="s01-icons" style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
          <Network_3 size={28} style={{ color: 'var(--color-primary)', opacity: 0.7 }} />
          <DataConnected size={28} style={{ color: 'var(--color-primary)', opacity: 0.7 }} />
        </div>

        <div
          className="s01-footer"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: '2rem',
            marginTop: '1rem',
          }}
        >
          <div>
            <p style={{ fontWeight: 700, fontSize: '1rem' }}>남주형</p>
            <p style={{ fontSize: '0.875rem', opacity: 0.5 }}>사업 / 프로덕트 총괄</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontWeight: 700, fontSize: '1rem' }}>Docfriends</p>
            <p style={{ fontSize: '0.875rem', opacity: 0.5 }}>닥프렌즈</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

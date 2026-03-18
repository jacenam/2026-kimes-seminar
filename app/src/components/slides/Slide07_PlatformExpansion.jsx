import { useRef } from 'react'
import { AppConnectivity, Devices } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const platforms = [
  { name: '네이버', mau: 'MAU 4,500만', color: '#03C75A' },
  { name: '카카오', mau: 'MAU 4,500만', color: '#FEE500' },
  { name: '당근', mau: 'MAU 2,000만', color: '#FF6F0F' },
  { name: '강남언니', mau: '뷰티·의료 특화', color: '#FF4573' },
  { name: '구글', mau: '글로벌 검색 1위', color: '#4285F4' },
  { name: '블라인드', mau: 'MAU 1,200만 직장인', color: '#1A1A2E' },
  { name: '키즈노트', mau: '전국 어린이집 90%', color: '#36B37E' },
]

export default function Slide07_PlatformExpansion() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s07-label', { opacity: 0, y: 30, duration: 0.5 })
      .from('.s07-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')
      .from('.s07-subtitle', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')

    // Stagger cards from alternating directions
    const cards = ref.current.querySelectorAll('.s07-card')
    cards.forEach((card, i) => {
      const fromX = i % 2 === 0 ? -60 : 60
      const fromY = i < 3 ? -40 : 40
      tl.from(card, {
        opacity: 0,
        x: fromX,
        y: fromY,
        duration: 0.5,
        ease: 'power2.out',
      }, `-=0.35`)
    })

    tl.from('.s07-emphasis', { opacity: 0, y: 20, duration: 0.5 }, '-=0.1')
  })

  return (
    <SlideLayout id="slide-07" ref={ref}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <AppConnectivity size={20} style={{ color: 'var(--color-primary)' }} />
          <p className="section-label s07-label" style={{ marginBottom: 0 }}>PLATFORM NETWORK</p>
        </div>

        <h2 className="section-title s07-title">멀티 플랫폼 확장</h2>
        <p className="section-subtitle s07-subtitle">
          <Devices size={18} style={{ verticalAlign: 'middle', marginRight: '0.5rem', color: 'var(--color-primary)' }} />
          5,000만 사용자 트래픽을 하나로
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          {platforms.map((p, i) => (
            <div
              key={p.name}
              className="s07-card"
              style={{
                padding: '1.5rem',
                background: '#f8fafc',
                borderRadius: '1rem',
                border: '1px solid #e2e8f0',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                gridColumn: i >= 4 && platforms.length % 4 !== 0 && i === platforms.length - 1
                  ? undefined
                  : undefined,
              }}
            >
              <div style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '0.75rem',
                background: p.color,
                opacity: 0.15,
                margin: '0 auto 0.75rem',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 1,
                }}>
                  <div style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    borderRadius: '50%',
                    background: p.color,
                  }} />
                </div>
              </div>
              <p style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>{p.name}</p>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 500 }}>{p.mau}</p>
            </div>
          ))}
        </div>

        <div
          className="s07-emphasis"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 1.5rem',
            background: 'var(--color-primary-light)',
            borderRadius: '0.75rem',
            border: '1px solid var(--color-primary)',
          }}
        >
          <AppConnectivity size={24} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
          <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
            네이버만 연동하던 시대에서 → 모든 주요 플랫폼이 하나로 연결되는 시대로
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}

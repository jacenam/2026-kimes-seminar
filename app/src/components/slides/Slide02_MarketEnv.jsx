import { useRef } from 'react'
import { Hospital, Catalog, Store } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const channels = [
  { label: '버스 배너', icon: Store },
  { label: '엘리베이터 광고', icon: Catalog },
  { label: '네이버 키워드', icon: Catalog },
  { label: '인스타그램 숏폼', icon: Catalog },
  { label: '유튜브 광고', icon: Catalog },
  { label: '카카오 플러스친구', icon: Catalog },
  { label: '블로그 체험단', icon: Catalog },
  { label: '지역 전단지', icon: Store },
  { label: 'TV / 라디오', icon: Catalog },
  { label: '옥외 전광판', icon: Store },
  { label: '병원 포털 광고', icon: Hospital },
  { label: '리뷰 마케팅', icon: Catalog },
]

export default function Slide02_MarketEnv() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    gsap.from('.s02-header', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    gsap.from('.s02-card', {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.5,
      stagger: 0.07,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })
  })

  return (
    <SlideLayout id="slide-02" ref={ref}>
      <div className="s02-header">
        <p className="section-label">MARKET OVERVIEW</p>
        <h2 className="section-title">세계 최고 밀도의 의료 시장</h2>
        <p className="section-subtitle">
          버스 배너부터 엘리베이터 광고, 네이버 키워드, 인스타그램 숏폼까지.
          <br />
          병원이 관리해야 할 마케팅 채널은 끝없이 늘어나고 있습니다.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
        }}
      >
        {channels.map(({ label, icon: Icon }, i) => (
          <div
            key={label}
            className="s02-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 1.25rem',
              background: '#f8fafc',
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0',
              fontWeight: 600,
              fontSize: '0.875rem',
              transition: 'all 0.3s ease',
            }}
          >
            <Icon size={20} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
            <span>{label}</span>
          </div>
        ))}
      </div>

      <p
        className="s02-card"
        style={{
          marginTop: '2rem',
          fontSize: '0.9375rem',
          color: '#64748b',
          textAlign: 'center',
        }}
      >
        병원 한 곳이 관리해야 할 채널만 <strong style={{ color: 'var(--color-primary)' }}>10개 이상</strong> -- 그리고 계속 늘어나는 중
      </p>
    </SlideLayout>
  )
}

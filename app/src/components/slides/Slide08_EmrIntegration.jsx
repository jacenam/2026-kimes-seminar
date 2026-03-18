import { useRef } from 'react'
import { ConnectionSignal, DataConnected } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const platformList = [
  '네이버',
  '카카오',
  '당근',
  '강남언니',
  '구글',
  '블라인드',
  '키즈노트',
]

const emrList = [
  '비트컴퓨터',
  '이지스헬스케어',
  '동의보감',
  '한의맥',
  '전능IT',
  '네오소프트뱅크',
  '다솜메디케어',
  '아비쥬의원',
  '자생한방병원',
  '함소아한의원',
]

export default function Slide08_EmrIntegration() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s08-label', { opacity: 0, y: 30, duration: 0.5 })
      .from('.s08-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')
      .from('.s08-subtitle', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
      .from('.s08-center', { opacity: 0, scale: 0.3, duration: 0.7, ease: 'back.out(1.7)' }, '-=0.1')
      .from('.s08-platform', { opacity: 0, x: -40, stagger: 0.06, duration: 0.4 }, '-=0.3')
      .from('.s08-emr', { opacity: 0, x: 40, stagger: 0.06, duration: 0.4 }, '-=0.5')
      .from('.s08-message', { opacity: 0, y: 20, duration: 0.5 }, '-=0.1')
  })

  return (
    <SlideLayout id="slide-08" ref={ref}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <ConnectionSignal size={20} style={{ color: 'var(--color-primary)' }} />
          <p className="section-label s08-label" style={{ marginBottom: 0 }}>EMR NETWORK</p>
        </div>

        <h2 className="section-title s08-title">32개 전자차트사 연동</h2>
        <p className="section-subtitle s08-subtitle">한 번의 설정으로 모든 플랫폼에 실시간 반영</p>

        <div className="hub-spoke">
          {/* Left: Platforms */}
          <div className="hub-spoke__side">
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
              PLATFORMS
            </p>
            {platformList.map((name) => (
              <div key={name} className="hub-spoke__item s08-platform">
                <DataConnected size={16} style={{ color: 'var(--color-primary)' }} />
                <span>{name}</span>
              </div>
            ))}
          </div>

          {/* Center: Hub */}
          <div className="hub-spoke__center s08-center">
            닥톡예약
          </div>

          {/* Right: EMR partners */}
          <div className="hub-spoke__side">
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
              EMR PARTNERS
            </p>
            {emrList.map((name) => (
              <div key={name} className="hub-spoke__item s08-emr">
                <ConnectionSignal size={16} style={{ color: '#64748b' }} />
                <span>{name}</span>
              </div>
            ))}
            <div className="hub-spoke__item s08-emr" style={{ justifyContent: 'center', color: 'var(--color-primary)', fontWeight: 700 }}>
              + 25 more
            </div>
          </div>
        </div>

        <div
          className="s08-message"
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            padding: '1rem 2rem',
            background: '#f8fafc',
            borderRadius: '0.75rem',
            border: '1px solid #e2e8f0',
          }}
        >
          <p style={{ fontSize: '1rem', fontWeight: 600, color: '#334155' }}>
            환자 유입 지점은 늘어나고, 관리 포인트는 <span style={{ color: 'var(--color-primary)' }}>한 곳</span>으로
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}

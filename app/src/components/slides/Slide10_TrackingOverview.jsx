import { useRef } from 'react'
import { ArrowRight, Analytics } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const steps = [
  { label: '광고 노출', desc: '플랫폼 광고 게재' },
  { label: '클릭', desc: '사용자 유입' },
  { label: '닥톡예약', desc: '예약 미들웨어' },
  { label: '플랫폼 예약 전달', desc: '병원 예약 연동' },
  { label: 'EMR 접수/진료', desc: '전자차트 기록' },
]

export default function Slide10_TrackingOverview() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s10-label', { opacity: 0, y: 30, duration: 0.5 })
      .from('.s10-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')
      .from('.s10-subtitle', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')

    // Steps appear one by one left to right
    const items = ref.current.querySelectorAll('.s10-step, .s10-arrow')
    items.forEach((item, i) => {
      tl.from(item, { opacity: 0, x: -30, duration: 0.4, ease: 'power2.out' }, `-=${i === 0 ? 0.1 : 0.2}`)
    })

    tl.from('.s10-highlight', { opacity: 0, y: 20, duration: 0.5 }, '-=0.1')
  })

  return (
    <SlideLayout id="slide-10" ref={ref}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Analytics size={20} style={{ color: 'var(--color-primary)' }} />
          <p className="section-label s10-label" style={{ marginBottom: 0 }}>FULL-FUNNEL TRACKING</p>
        </div>

        <h2 className="section-title s10-title">광고의 '진짜 성과'</h2>
        <p className="section-subtitle s10-subtitle">인프라가 연결되면, 비로소 정교한 분석이 가능합니다</p>

        <div className="tracking-flow">
          {steps.map((step, i) => (
            <div key={step.label} style={{ display: 'contents' }}>
              <div
                className={`tracking-flow__step s10-step ${i === 2 ? 'tracking-flow__step--active' : ''}`}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.375rem' }}
              >
                <span style={{ fontSize: '0.9375rem', fontWeight: 700 }}>{step.label}</span>
                <span style={{ fontSize: '0.75rem', color: i === 2 ? 'var(--color-primary-dark)' : '#94a3b8', fontWeight: 400 }}>
                  {step.desc}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="tracking-flow__arrow s10-arrow">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="s10-highlight"
          style={{
            padding: '1.25rem 2rem',
            background: 'var(--color-primary-light)',
            borderRadius: '0.75rem',
            border: '1px solid var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <Analytics size={22} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
          <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
            닥톡예약이 중간에 위치하기 때문에, 광고 클릭부터 실제 예약·접수까지 전 과정을 추적할 수 있습니다
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}

import { useRef } from 'react'
import { Activity, CheckmarkFilled, Hospital } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const trackingSteps = [
  {
    icon: Activity,
    title: '예약 발생',
    desc: '환자가 플랫폼에서 예약을 완료하면, 닥톡예약이 실시간으로 예약 정보를 수신합니다.',
    color: 'var(--color-primary)',
  },
  {
    icon: CheckmarkFilled,
    title: '실제 내원 (접수)',
    desc: 'EMR 전자차트에 접수가 이루어지면, 해당 예약이 실제 내원으로 전환되었음을 자동 확인합니다.',
    color: '#3B82F6',
  },
  {
    icon: Hospital,
    title: '진료 완료',
    desc: '진료 기록이 생성되면, 광고 → 예약 → 내원 → 진료까지의 전체 여정이 완성됩니다.',
    color: '#8B5CF6',
  },
]

export default function Slide11_EmrTracking() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s11-label', { opacity: 0, y: 30, duration: 0.5 })
      .from('.s11-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')
      .from('.s11-subtitle', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')

    // Cards slide in sequentially
    ref.current.querySelectorAll('.s11-card').forEach((card, i) => {
      tl.from(card, {
        opacity: 0,
        x: -50,
        duration: 0.6,
        ease: 'power2.out',
      }, i === 0 ? '-=0.1' : '-=0.3')
    })

    tl.from('.s11-message', { opacity: 0, y: 20, duration: 0.5 }, '-=0.1')
  })

  return (
    <SlideLayout id="slide-11" ref={ref}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Activity size={20} style={{ color: 'var(--color-primary)' }} />
          <p className="section-label s11-label" style={{ marginBottom: 0 }}>DEEP TRACKING</p>
        </div>

        <h2 className="section-title s11-title">예약을 넘어 내원까지</h2>
        <p className="section-subtitle s11-subtitle">전자차트 파트너사와 함께 환자의 접수와 진료까지 추적</p>

        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
          {trackingSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.title} style={{ display: 'flex', alignItems: 'center', flex: 1, gap: '1rem' }}>
                <div
                  className="s11-card"
                  style={{
                    flex: 1,
                    padding: '2rem 1.5rem',
                    background: '#f8fafc',
                    borderRadius: '1rem',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '0.75rem',
                    background: step.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}>
                    <Icon size={22} style={{ color: '#fff' }} />
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#94a3b8',
                    marginBottom: '0.375rem',
                  }}>
                    STEP {i + 1}
                  </div>
                  <p style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>{step.title}</p>
                  <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
                {i < trackingSteps.length - 1 && (
                  <div className="flow-connector" style={{ fontSize: '1.25rem', color: '#cbd5e1' }}>→</div>
                )}
              </div>
            )
          })}
        </div>

        <div
          className="s11-message"
          style={{
            padding: '1.25rem 2rem',
            background: 'var(--color-primary-light)',
            borderRadius: '0.75rem',
            border: '1px solid var(--color-primary)',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
            특정 플랫폼 광고가 예약으로, 예약이 내원으로 이어지는 전 과정을 실시간 모니터링
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}

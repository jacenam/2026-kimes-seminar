import { useRef } from 'react'
import { Cognitive, CheckmarkFilled, DocumentTasks, Certificate, Partnership } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const processSteps = [
  { label: '심의 신청', icon: <DocumentTasks size={24} />, active: false },
  { label: 'AI 자동 판단', icon: <Cognitive size={24} />, active: true },
  { label: '의협 최종 컨펌', icon: <CheckmarkFilled size={24} />, active: false },
  { label: '필증 부여', icon: <Certificate size={24} />, active: false },
]

export default function Slide14_AiReviewSolution() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s14-label', { opacity: 0, y: 30, duration: 0.5 })
      .from('.s14-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')
      .from('.s14-before', { opacity: 0, x: -60, duration: 0.7 }, '-=0.1')
      .from('.s14-after', { opacity: 0, x: 60, duration: 0.7 }, '-=0.5')

    // Process steps appear sequentially
    const steps = ref.current.querySelectorAll('.s14-step')
    steps.forEach((step, i) => {
      tl.from(step, {
        opacity: 0,
        y: 30,
        duration: 0.4,
        ease: 'power2.out',
      }, i === 0 ? '+=0.3' : '-=0.15')
    })

    tl.from('.s14-details', { opacity: 0, y: 20, duration: 0.5 }, '-=0.1')
      .from('.s14-badge', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
  })

  return (
    <SlideLayout id="slide-14" ref={ref}>
      <p className="section-label s14-label">AI SOLUTION</p>
      <h2 className="section-title s14-title">
        <Cognitive size={36} style={{ verticalAlign: 'middle', marginRight: '0.75rem', color: 'var(--color-primary)' }} />
        닥톡AI 의료광고 자동심의
      </h2>

      {/* Before / After comparison */}
      <div className="compare-grid" style={{ marginBottom: '2.5rem' }}>
        <div className="compare-box compare-box--before s14-before">
          <p style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', opacity: 0.7 }}>BEFORE</p>
          <p style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.2 }}>15일~3개월</p>
          <p style={{ fontSize: '1rem', fontWeight: 600, marginTop: '0.75rem' }}>긴 대기, 기회 상실</p>
        </div>
        <div className="compare-box compare-box--after s14-after">
          <p style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', opacity: 0.7 }}>AFTER</p>
          <p style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1.2 }}>1일~3일</p>
          <p style={{ fontSize: '1rem', fontWeight: 600, marginTop: '0.75rem' }}>불확실성 제거</p>
        </div>
      </div>

      {/* Process flow */}
      <div className="process-steps" style={{ marginBottom: '2rem' }}>
        {processSteps.map((step, i) => (
          <div
            key={i}
            className={`process-step s14-step ${step.active ? 'process-step--active' : ''}`}
          >
            <div className="process-step__icon">
              {step.icon}
            </div>
            <p style={{ fontSize: '0.875rem', fontWeight: 700 }}>{step.label}</p>
          </div>
        ))}
      </div>

      {/* Key details */}
      <div
        className="s14-details"
        style={{
          background: '#f0fdf4',
          borderRadius: '0.75rem',
          padding: '1rem 1.5rem',
          border: '1px solid #bbf7d0',
          marginBottom: '1.25rem',
          fontSize: '0.9375rem',
          color: '#15803d',
          fontWeight: 500,
          lineHeight: 1.7,
        }}
      >
        <Cognitive size={18} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
        AI가 학습한 데이터: <strong>의료법</strong>, <strong>보건복지부 가이드라인</strong>, <strong>지역 보건소별 유권해석</strong>
      </div>

      {/* Partner badge */}
      <div
        className="s14-badge"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.875rem 1.5rem',
          background: 'var(--color-bg-dark)',
          borderRadius: '0.75rem',
          width: 'fit-content',
        }}
      >
        <Partnership size={20} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
        <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff' }}>
          대한의사협회 의료광고심의위원회 공식 파트너
        </p>
      </div>
    </SlideLayout>
  )
}

import { useRef } from 'react'
import { ConnectionSignal, Growth, Analytics, FavoriteFilled, Collaborate } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const flywheelNodes = [
  { label: '연결', sub: '닥톡예약', pos: 'top', icon: <ConnectionSignal size={20} /> },
  { label: '유입', sub: '성과 기반 광고', pos: 'right', icon: <Growth size={20} /> },
  { label: '추적', sub: '실시간 분석', pos: 'bottom', icon: <Analytics size={20} /> },
  { label: '케어', sub: 'AI 리텐션', pos: 'left', icon: <FavoriteFilled size={20} /> },
]

export default function Slide17_OutroVision() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s17-label', { opacity: 0, y: 30, duration: 0.5 })
      .from('.s17-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')

    // Flywheel center
    tl.from('.s17-center', {
      opacity: 0,
      scale: 0,
      duration: 0.6,
      ease: 'back.out(1.7)',
    }, '+=0.2')

    // Nodes pop in with back.out easing
    const nodes = ref.current.querySelectorAll('.s17-node')
    nodes.forEach((node, i) => {
      tl.from(node, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        ease: 'back.out(2)',
      }, '-=0.25')
    })

    // Ring draws in
    tl.from('.s17-ring circle', {
      strokeDashoffset: 880,
      duration: 1.5,
      ease: 'power2.inOut',
    }, '-=0.8')

    // Vision box fades up
    tl.from('.s17-vision', {
      opacity: 0,
      y: 40,
      duration: 0.7,
    }, '-=0.5')

    tl.from('.s17-thanks', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
  })

  return (
    <SlideLayout id="slide-17" dark ref={ref}>
      <div style={{ textAlign: 'center' }}>
        <p className="section-label s17-label">VISION</p>
        <h2 className="section-title s17-title" style={{ marginBottom: '2.5rem' }}>
          데이터가 흐르는 병원의 미래
        </h2>

        {/* Flywheel */}
        <div className="flywheel" style={{ marginBottom: '2.5rem' }}>
          {/* SVG Ring */}
          <svg
            className="flywheel__ring s17-ring"
            width="280"
            height="280"
            viewBox="0 0 280 280"
          >
            <circle
              cx="140"
              cy="140"
              r="130"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="2"
              strokeDasharray="880"
              strokeDashoffset="0"
              opacity="0.4"
            />
          </svg>

          {/* Center */}
          <div className="flywheel__center s17-center">
            DATA<br />FLYWHEEL
          </div>

          {/* Nodes */}
          {flywheelNodes.map((node, i) => (
            <div
              key={i}
              className={`flywheel__node flywheel__node--${node.pos} s17-node`}
              style={{ color: '#1e293b' }}
            >
              <div style={{ color: 'var(--color-primary)', marginBottom: '0.25rem' }}>
                {node.icon}
              </div>
              <p style={{ fontWeight: 800, fontSize: '0.8125rem', lineHeight: 1.2 }}>{node.label}</p>
              <p style={{ fontSize: '0.625rem', color: '#64748b', marginTop: '0.125rem' }}>{node.sub}</p>
            </div>
          ))}
        </div>

        {/* Vision statement box */}
        <div
          className="vision-box s17-vision"
          style={{ maxWidth: '800px', margin: '0 auto 2rem' }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '1rem',
          }}>
            <Collaborate size={20} style={{ color: 'var(--color-primary)' }} />
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--color-primary)' }}>
              VISION
            </p>
          </div>
          <p style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.6, marginBottom: '1rem' }}>
            환자와 의사를{' '}
            <span style={{ color: 'var(--color-primary)', fontWeight: 900 }}>1인 1주치의</span>{' '}
            관계로 연결
          </p>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
            닥프렌즈는 데이터와 기술로 의료의 새로운 뉴노멀을 만들어갑니다.
          </p>
        </div>

        {/* Thank you */}
        <p
          className="s17-thanks"
          style={{
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 500,
          }}
        >
          경청해 주셔서 감사합니다.
        </p>
      </div>
    </SlideLayout>
  )
}

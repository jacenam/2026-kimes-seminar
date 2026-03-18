import { useRef } from 'react'
import { WarningAlt, Time, Locked } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

export default function Slide13_AdReviewProblem() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s13-label', { opacity: 0, y: 30, duration: 0.5 })
      .from('.s13-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')
      .from('.s13-subtitle', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
      .from('.s13-problem-box', {
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        ease: 'back.out(1.7)',
      }, '-=0.1')

    // Shake / pulse the problem box
    gsap.to('.s13-problem-box', {
      x: 3,
      duration: 0.1,
      repeat: 5,
      yoyo: true,
      delay: 1.5,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    gsap.to('.s13-problem-box', {
      boxShadow: '0 0 40px rgba(225, 29, 72, 0.25)',
      duration: 1,
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s13-card-0', { opacity: 0, y: 30, duration: 0.5 }, '+=0.3')
      .from('.s13-card-1', { opacity: 0, y: 30, duration: 0.5 }, '-=0.2')
  })

  const explanations = [
    {
      icon: <Locked size={24} />,
      text: '의료법상 모든 광고물은 의사협회 심의 필수',
    },
    {
      icon: <Time size={24} />,
      text: '트렌드는 빠르게 변하는데 심의를 기다리다 기회 상실',
    },
  ]

  return (
    <SlideLayout id="slide-13" ref={ref}>
      <p className="section-label s13-label" style={{ color: '#e11d48' }}>BARRIER</p>
      <h2 className="section-title s13-title">
        <WarningAlt size={36} style={{ verticalAlign: 'middle', marginRight: '0.75rem', color: '#e11d48' }} />
        의료광고 심의의 벽
      </h2>
      <p className="section-subtitle s13-subtitle">
        최적의 광고 전략을 세웠어도, 실행 단계에서 마주치는 큰 벽
      </p>

      {/* Big problem box */}
      <div
        className="s13-problem-box"
        style={{
          background: 'linear-gradient(135deg, #fff1f2, #ffe4e6)',
          border: '2px solid #fda4af',
          borderRadius: '1.5rem',
          padding: '3rem 4rem',
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        <WarningAlt size={48} style={{ color: '#e11d48', marginBottom: '1rem' }} />
        <p style={{ fontSize: '1rem', fontWeight: 600, color: '#9f1239', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
          평균 심의 기간
        </p>
        <p style={{ fontSize: '3.5rem', fontWeight: 900, color: '#be123c', lineHeight: 1.2 }}>
          15일 ~ 3개월
        </p>
        <p style={{ fontSize: '0.9375rem', color: '#9f1239', marginTop: '0.75rem', fontWeight: 500 }}>
          광고를 준비해도 심의를 통과하기까지 긴 시간이 소요됩니다
        </p>
      </div>

      {/* Explanation cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {explanations.map((item, i) => (
          <div
            key={i}
            className={`s13-card-${i}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem 2rem',
              background: '#fff7ed',
              borderRadius: '1rem',
              border: '1px solid #fed7aa',
            }}
          >
            <div style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '0.75rem',
              background: '#fef3c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#d97706',
              flexShrink: 0,
            }}>
              {item.icon}
            </div>
            <p style={{ fontWeight: 600, fontSize: '1rem', color: '#78350f', lineHeight: 1.5 }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </SlideLayout>
  )
}

import { useRef } from 'react'
import { WarningAlt } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const quotes = [
  '"클릭은 많은데 실제 예약은 얼마나 된 거지?"',
  '"이 환자가 우리 병원 문을 열고 들어오게 만든 광고는 정확히 뭐였지?"',
]

export default function Slide04_AdPainPoint() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s04-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s04-quote-0', { opacity: 0, x: -30, duration: 0.7 }, '+=0.2')
      .from('.s04-quote-1', { opacity: 0, x: -30, duration: 0.7 }, '+=0.3')
      .from('.s04-agency', { opacity: 0, y: 30, duration: 0.6 }, '+=0.2')
  })

  return (
    <SlideLayout id="slide-04" ref={ref}>
      <div className="s04-header">
        <p className="section-label" style={{ color: '#e11d48' }}>PAIN POINT</p>
        <h2 className="section-title">
          <WarningAlt size={32} style={{ verticalAlign: 'middle', marginRight: '0.5rem', color: '#f59e0b' }} />
          광고비의 역설
        </h2>
      </div>

      <div style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>
        {quotes.map((q, i) => (
          <p
            key={i}
            className={`s04-quote-${i}`}
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              lineHeight: 1.6,
              color: '#1e293b',
              marginBottom: '1.5rem',
              paddingLeft: '1.5rem',
              borderLeft: '4px solid #f59e0b',
            }}
          >
            {q}
          </p>
        ))}
      </div>

      <div
        className="s04-agency"
        style={{
          background: '#fff7ed',
          borderRadius: '1rem',
          padding: '2rem 2.5rem',
          border: '1px solid #fed7aa',
        }}
      >
        <p style={{ fontWeight: 700, fontSize: '1.125rem', color: '#c2410c', marginBottom: '0.75rem' }}>
          <WarningAlt size={20} style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
          광고 에이전시도 답답하긴 마찬가지
        </p>
        <p style={{ color: '#78350f', fontSize: '0.9375rem', lineHeight: 1.7 }}>
          에이전시 역시 광고 집행 전후의 내원 환자 수를 대략적으로 비교하는 것이 전부입니다.
          <br />
          정확히 어떤 광고가 실제 예약과 내원으로 이어졌는지 추적할 방법이 없습니다.
        </p>
      </div>
    </SlideLayout>
  )
}

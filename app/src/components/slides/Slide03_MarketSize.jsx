import { useRef } from 'react'
import { ChartColumn, Finance } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

export default function Slide03_MarketSize() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s03-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s03-stat', {
        opacity: 0,
        scale: 0.85,
        y: 40,
        duration: 0.7,
        stagger: 0.2,
        ease: 'back.out(1.5)',
      }, '-=0.2')
      .from('.s03-note', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
  })

  return (
    <SlideLayout id="slide-03" ref={ref}>
      <div className="s03-header">
        <p className="section-label">MARKET SIZE</p>
        <h2 className="section-title">
          <ChartColumn size={32} style={{ verticalAlign: 'middle', marginRight: '0.5rem', color: 'var(--color-primary)' }} />
          8조원 의료 광고 시장
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginTop: '1rem',
          marginBottom: '2.5rem',
        }}
      >
        {/* Card 1 */}
        <div className="stat-card s03-stat">
          <Finance size={28} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <div
            className="stat-card__number"
            style={{ color: 'var(--color-primary)' }}
          >
            8조원
          </div>
          <div className="stat-card__label">전체 의료 광고 시장</div>
        </div>

        {/* Card 2 */}
        <div className="stat-card s03-stat">
          <ChartColumn size={28} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
          <div
            className="stat-card__number"
            style={{ color: 'var(--color-primary)' }}
          >
            5조원
          </div>
          <div className="stat-card__label">온라인 광고 비중</div>
        </div>
      </div>

      <p
        className="s03-note"
        style={{
          textAlign: 'center',
          color: '#64748b',
          fontSize: '1rem',
          lineHeight: 1.7,
          maxWidth: '640px',
          margin: '0 auto',
        }}
      >
        그 결과 국내 의료 광고 시장은 무려{' '}
        <strong style={{ color: '#1e293b' }}>8조 원</strong> 규모로 성장했습니다.
        <br />
        이 중 <strong style={{ color: '#1e293b' }}>5조 원 이상</strong>이 온라인에 집중되어 있습니다.
      </p>
    </SlideLayout>
  )
}

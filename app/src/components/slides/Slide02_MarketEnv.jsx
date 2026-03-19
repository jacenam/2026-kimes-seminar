import { useRef } from 'react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const DATA_CIRCLES = [
  {
    num: '01',
    value: '51.4%',
    label: '수도권·대도시 집중',
    desc: '전체 의료기관의 절반 이상이\n수도권 및 대도시권에 밀집',
    filled: true,
  },
  {
    num: '02',
    value: '상위 1%',
    label: 'OECD 의료 밀도',
    desc: '면적 당 의료기관 수 기준\nOECD 국가 중 상위 1% 수준',
    filled: false,
  },
  {
    num: '03',
    value: '12.8개',
    label: '인구 1,000명당 병상',
    desc: 'OECD 평균의 약 2.7배\n병상 수 압도적 1위',
    filled: false,
  },
]

export default function Slide02_MarketEnv() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s02-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s02-circle', {
        opacity: 0, scale: 0.8,
        stagger: 0.15, duration: 0.7, ease: 'back.out(1.4)',
      }, '-=0.3')
      .from('.s02-ring', {
        strokeDashoffset: 565,
        duration: 1.2, stagger: 0.2, ease: 'power2.out',
      }, '-=0.8')
      .from('.s02-bottom', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
  })

  return (
    <SlideLayout id="slide-02" ref={ref}>
      <div className="s02-header" style={{ marginBottom: '2rem' }}>
        <p className="section-label">MARKET OVERVIEW</p>
        <h2 className="section-title">
          우리나라 의료 시장은 전 세계에서
          <br />
          가장 밀도가 높고 치열한 환경 중 하나입니다
        </h2>
      </div>

      {/* Circle data points */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: '3.5rem',
        marginTop: '5rem',
      }}>
        {DATA_CIRCLES.map((item, i) => (
          <div key={item.num} className="s02-circle" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            textAlign: 'center', width: '220px',
          }}>
            {/* Circle */}
            <div style={{
              position: 'relative', width: '160px', height: '160px',
              marginBottom: '1.25rem',
            }}>
              {/* SVG ring */}
              <svg viewBox="0 0 180 180" style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                transform: 'rotate(-90deg)',
              }}>
                <circle
                  cx="90" cy="90" r="85"
                  fill={item.filled ? 'var(--color-primary)' : 'none'}
                  fillOpacity={item.filled ? 0.12 : 0}
                  stroke="var(--color-primary)"
                  strokeWidth={item.filled ? 3 : 2}
                  strokeDasharray="565"
                  strokeDashoffset="0"
                  strokeLinecap="round"
                  className="s02-ring"
                  opacity={item.filled ? 1 : 0.5}
                />
              </svg>

              {/* Inner content */}
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}>
                <p style={{
                  fontSize: '0.875rem', fontWeight: 800, color: 'var(--color-primary)',
                  marginBottom: '0.25rem',
                }}>{item.num}</p>
                <p style={{
                  fontSize: '2rem', fontWeight: 900, color: '#0f172a',
                  lineHeight: 1, letterSpacing: '-0.02em',
                }}>{item.value}</p>
              </div>
            </div>

            {/* Label */}
            <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#0f172a', marginBottom: '0.375rem' }}>
              {item.label}
            </p>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </SlideLayout>
  )
}

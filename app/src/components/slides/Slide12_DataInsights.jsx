import { useRef } from 'react'
import { Analytics, Dashboard, ChartVennDiagram } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const questions = [
  '우리 병원 상권에서는 어떤 플랫폼의 유입률이 가장 높은지',
  '특정 연령대는 어떤 광고 상품에 반응하는지',
]

const dimensions = [
  { icon: Analytics, title: '지역별 유입 분석', desc: '상권 기반 플랫폼별 환자 유입 패턴' },
  { icon: Dashboard, title: '진료과별 전환율', desc: '진료과에 따른 예약 → 내원 전환 비율' },
  { icon: ChartVennDiagram, title: '연령대별 광고 반응률', desc: '연령·성별 세그먼트 광고 효율 비교' },
]

const channelData = [
  { name: '네이버', pct: 42 },
  { name: '당근', pct: 28 },
  { name: '카카오', pct: 18 },
  { name: '기타', pct: 12 },
]

export default function Slide12_DataInsights() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s12-label', { opacity: 0, y: 30, duration: 0.5 })
      .from('.s12-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')

    // Quote-style questions
    tl.from('.s12-question', { opacity: 0, x: -30, stagger: 0.2, duration: 0.5 }, '-=0.1')

    // Dimension cards
    tl.from('.s12-dim', { opacity: 0, y: 30, stagger: 0.15, duration: 0.5 }, '-=0.2')

    // Data bars fill progressively
    const fills = ref.current.querySelectorAll('.s12-fill')
    fills.forEach((fill, i) => {
      const target = fill.dataset.width
      gsap.set(fill, { width: '0%' })
      tl.to(fill, {
        width: target + '%',
        duration: 1,
        ease: 'power2.out',
      }, i === 0 ? '-=0.1' : '-=0.7')
    })

    tl.from('.s12-bottom', { opacity: 0, y: 20, duration: 0.5 }, '-=0.3')
  })

  return (
    <SlideLayout id="slide-12" ref={ref}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Analytics size={20} style={{ color: 'var(--color-primary)' }} />
          <p className="section-label s12-label" style={{ marginBottom: 0 }}>DATA-DRIVEN INSIGHTS</p>
        </div>

        <h2 className="section-title s12-title" style={{ marginBottom: '2rem' }}>데이터가 답하는 시대</h2>

        {/* Key questions */}
        <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {questions.map((q) => (
            <div
              key={q}
              className="s12-question"
              style={{
                padding: '1rem 1.5rem',
                background: '#f8fafc',
                borderLeft: '4px solid var(--color-primary)',
                borderRadius: '0 0.75rem 0.75rem 0',
                fontSize: '1.0625rem',
                fontWeight: 600,
                color: '#334155',
                fontStyle: 'italic',
              }}
            >
              "{q}"
            </div>
          ))}
        </div>

        {/* Two-column layout: dimensions + data bars */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          {/* Left: Analysis dimensions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {dimensions.map((d) => {
              const Icon = d.icon
              return (
                <div
                  key={d.title}
                  className="s12-dim"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    background: '#f8fafc',
                    borderRadius: '0.75rem',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '0.625rem',
                    background: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} style={{ color: '#fff' }} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '0.9375rem', marginBottom: '0.125rem' }}>{d.title}</p>
                    <p style={{ fontSize: '0.8125rem', color: '#64748b' }}>{d.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Channel data bars */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              CHANNEL BREAKDOWN
            </p>
            {channelData.map((ch) => (
              <div key={ch.name} className="data-bar">
                <div className="data-bar__header">
                  <span style={{ fontWeight: 600 }}>{ch.name}</span>
                  <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{ch.pct}%</span>
                </div>
                <div className="data-bar__track">
                  <div
                    className="data-bar__fill s12-fill"
                    data-width={ch.pct}
                    style={{ width: '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="s12-bottom"
          style={{
            textAlign: 'center',
            padding: '1rem 2rem',
            background: 'var(--color-primary-light)',
            borderRadius: '0.75rem',
            border: '1px solid var(--color-primary)',
          }}
        >
          <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
            막연한 추측이 아닌, 데이터 기반 추천의 시대
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}

import { useRef } from 'react'
import { ArrowRight, Checkmark } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const STEPS = [
  { num: '01', label: '광고 클릭', desc: '타겟 환자 유입', source: 'Platform Data' },
  { num: '02', label: '정보 탐색', desc: '광고 콘텐츠 탐색', source: 'Platform Data' },
  { num: '03', label: '예약 전환', desc: '예약 전환율 측정', source: 'Doctalk Data' },
  { num: '04', label: '환자 내원', desc: '노쇼·취소 여부 확인', source: 'EMR Data' },
  { num: '05', label: '접수·진료 완료', desc: '실제 진료 완료 추적', source: 'EMR Data' },
]

const DATA_SOURCES = [
  {
    label: 'Platform',
    desc: '광고 노출·클릭·탐색',
    color: '#6366f1',
    bg: '#eef2ff',
    steps: [0, 1],
  },
  {
    label: 'Doctalk',
    desc: '예약 중개·전환',
    color: 'var(--color-primary)',
    bg: 'var(--color-primary-light)',
    steps: [2],
  },
  {
    label: 'EMR',
    desc: '내원·접수·진료',
    color: '#f97316',
    bg: '#fff7ed',
    steps: [3, 4],
  },
]

export default function Slide10c_FullFunnel() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s10c-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s10c-source-label', { opacity: 0, y: 10, stagger: 0.1, duration: 0.4 }, '-=0.2')
      .from('.s10c-line-segment', { scaleX: 0, transformOrigin: 'left center', stagger: 0.06, duration: 0.3 }, '-=0.5')
      .from('.s10c-card', { opacity: 0, y: 30, stagger: 0.08, duration: 0.5, ease: 'power2.out' }, '-=0.5')
      .from('.s10c-footer', { opacity: 0, y: 20, duration: 0.5 }, '-=0.1')
  })

  // Map step index to its data source color
  const getSourceForStep = (i) => DATA_SOURCES.find((s) => s.steps.includes(i))

  return (
    <SlideLayout id="slide-10c" ref={ref}>
      <style>{`
        .s10c-doctalk-label,
        .s10c-doctalk-card {
          animation: doctalkGlow 1s ease-in-out infinite;
        }
        .s10c-doctalk-card::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 1.1rem;
          border: 2px solid var(--color-primary);
          animation: doctalkRing 1s ease-in-out infinite;
        }
        @keyframes doctalkGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(47, 208, 150, 0.4); }
          50% { box-shadow: 0 0 20px 6px rgba(47, 208, 150, 0.3); }
        }
        @keyframes doctalkRing {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.03); }
        }
      `}</style>

      {/* Header */}
      <div className="s10c-header" style={{ marginBottom: '2.5rem' }}>
        <p className="section-label">FULL-FUNNEL TRACKING</p>
        <h2 className="section-title">
          인프라가 연결되면, 비로소 정교한 분석이 가능합니다
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 0 }}>
          플랫폼 · 닥톡예약 · EMR — 세 데이터가 하나로 연결될 때, 광고 여정의 풀 사이클 트래킹이 실현됩니다
        </p>
      </div>

      {/* Data source zone labels */}
      <div style={{
        display: 'flex', marginBottom: '0.75rem', paddingLeft: '0.5rem',
      }}>
        {DATA_SOURCES.map((src) => {
          const isDoctalk = src.label === 'Doctalk'
          return (
            <div key={src.label} className={`s10c-source-label${isDoctalk ? ' s10c-doctalk-label' : ''}`} style={{
              flex: `0 0 ${src.steps.length === 2 ? '40%' : '20%'}`,
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              ...(isDoctalk ? {
                background: 'rgba(47, 208, 150, 0.08)',
                padding: '0.25rem 0.75rem',
                borderRadius: '2rem',
                position: 'relative',
              } : {}),
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: src.color, flexShrink: 0,
              }} />
              <span style={{
                fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
                color: src.color, textTransform: 'uppercase',
              }}>
                {src.label} — {src.desc}
              </span>
            </div>
          )
        })}
      </div>

      {/* Timeline */}
      <div style={{
        display: 'flex', alignItems: 'center',
        marginBottom: '1rem', height: '3px',
      }}>
        {STEPS.map((step, i) => {
          const source = getSourceForStep(i)
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div className="s10c-line-segment" style={{
                flex: 1, height: '3px', borderRadius: '2px',
                background: source.color,
              }} />
              <div style={{
                width: '12px', height: '12px', borderRadius: '50%',
                background: source.color,
                border: '3px solid white',
                boxShadow: `0 0 0 1px ${source.color}`,
                flexShrink: 0, zIndex: 1,
              }} />
            </div>
          )
        })}
      </div>

      {/* Step cards */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '0.75rem', marginBottom: '2.5rem',
      }}>
        {STEPS.map((step, i) => {
          const source = getSourceForStep(i)
          const isDoctalk = i === 2
          return (
            <div key={step.num} className={`s10c-card${isDoctalk ? ' s10c-doctalk-card' : ''}`} style={{
              padding: '1.5rem 1.25rem',
              borderRadius: '1rem',
              background: isDoctalk ? 'rgba(47, 208, 150, 0.06)' : source.bg,
              border: isDoctalk ? '2px solid var(--color-primary)' : `1px solid ${source.color}20`,
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
              position: 'relative',
            }}>
              <span style={{
                fontSize: '2rem', fontWeight: 800, lineHeight: 1,
                color: source.color, opacity: 0.4,
                letterSpacing: '-0.02em',
              }}>
                {step.num}
              </span>
              <p style={{
                fontWeight: 700, fontSize: '0.9375rem', lineHeight: 1.3,
                color: '#0f172a',
              }}>
                {step.label}
              </p>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.375rem',
              }}>
                <Checkmark size={14} style={{ color: source.color, flexShrink: 0 }} />
                <p style={{
                  fontSize: '0.75rem', lineHeight: 1.4,
                  color: '#64748b',
                }}>
                  {step.desc}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer — full cycle emphasis */}
      <div className="s10c-footer" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '0.75rem', marginTop: '0.5rem',
      }}>
        {DATA_SOURCES.map((src, i) => (
          <div key={src.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{
              padding: '0.375rem 1rem', borderRadius: '2rem',
              background: src.bg, fontSize: '0.8125rem',
              fontWeight: 700, color: src.color,
              border: `1px solid ${src.color}30`,
            }}>
              {src.label}
            </span>
            {i < DATA_SOURCES.length - 1 && (
              <ArrowRight size={16} style={{ color: '#cbd5e1' }} />
            )}
          </div>
        ))}
        <span style={{
          fontSize: '0.875rem', fontWeight: 600, color: '#0f172a',
          marginLeft: '0.5rem',
        }}>
          = 광고 여정 풀 사이클 트래킹
        </span>
      </div>

      <p className="s10c-footer" style={{
        textAlign: 'center', marginTop: '2.5rem',
        fontSize: '1.25rem', fontWeight: 800, color: '#0f172a',
        letterSpacing: '-0.01em',
      }}>
        이 모든 연결이 바로, <span style={{ color: 'var(--color-primary)' }}>닥톡광고</span> 중개의 시작입니다
      </p>
    </SlideLayout>
  )
}

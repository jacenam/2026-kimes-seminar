import { useRef } from 'react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const STEPS = [
  {
    num: '01',
    label: '광고 집행 신청',
    desc: '병원·대행사 신청',
    trackable: true,
  },
  {
    num: '02',
    label: '광고 집행',
    desc: '플랫폼 광고 게재',
    trackable: true,
  },
  {
    num: '03',
    label: '타겟 환자 노출',
    desc: '타겟 대상 광고 도달',
    trackable: true,
  },
  {
    num: '04',
    label: '광고 클릭',
    desc: '환자가 광고 클릭',
    trackable: true,
  },
  {
    num: '05',
    label: '예약 전환',
    desc: '예약으로 이어졌는가?',
    trackable: false,
  },
  {
    num: '06',
    label: '환자 내원',
    desc: '실제 내원했는가?',
    trackable: false,
  },
]

export default function Slide10b_TrackingOverviewAlt() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s10b-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s10b-phase', { opacity: 0, y: 10, stagger: 0.1, duration: 0.4 }, '-=0.2')
      .from('.s10b-line-segment', { scaleX: 0, transformOrigin: 'left center', stagger: 0.06, duration: 0.3 }, '-=0.6')
      .from('.s10b-card', { opacity: 0, y: 30, stagger: 0.08, duration: 0.5, ease: 'power2.out' }, '-=0.6')
      .from('.s10b-footer', { opacity: 0, y: 20, duration: 0.5 }, '-=0.1')
  })

  return (
    <SlideLayout id="slide-10b" ref={ref}>
      {/* Header */}
      <div className="s10b-header" style={{ marginBottom: '3rem' }}>
        <p className="section-label" style={{ color: '#e11d48' }}>AD TRACKING PROBLEM</p>
        <h2 className="section-title">광고의 '진짜 성과'를 알 수 없는 구조</h2>
        <p className="section-subtitle" style={{ marginBottom: 0 }}>
          기존 광고 집행 플로우에서는 클릭 이후의 환자 여정을 추적할 수 없습니다
        </p>
      </div>

      {/* Phase labels */}
      <div style={{
        display: 'flex', marginBottom: '0.75rem',
        paddingLeft: '0.5rem',
      }}>
        <div className="s10b-phase" style={{
          flex: '0 0 66.66%',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%', background: '#334155',
          }} />
          <span style={{
            fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
            color: '#94a3b8', textTransform: 'uppercase',
          }}>
            측정 가능 구간 — 노출 수(Imp), 클릭 수(Clicks)
          </span>
        </div>
        <div className="s10b-phase" style={{
          flex: '0 0 33.33%',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%', background: '#e11d48',
          }} />
          <span style={{
            fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
            color: '#e11d48', textTransform: 'uppercase',
          }}>
            추적 불가 구간 — 예약 전환(Conv), 실제 내원
          </span>
        </div>
      </div>

      {/* Timeline line */}
      <div style={{
        display: 'flex', alignItems: 'center',
        marginBottom: '1rem', height: '3px',
      }}>
        {STEPS.map((step, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <div className="s10b-line-segment" style={{
              flex: 1, height: '3px', borderRadius: '2px',
              background: step.trackable
                ? '#334155'
                : 'repeating-linear-gradient(90deg, #e11d48 0, #e11d48 6px, transparent 6px, transparent 12px)',
            }} />
            {/* Node dot */}
            <div style={{
              width: '12px', height: '12px', borderRadius: '50%',
              background: step.trackable ? '#334155' : '#e11d48',
              border: '3px solid white',
              boxShadow: `0 0 0 1px ${step.trackable ? '#334155' : '#e11d48'}`,
              flexShrink: 0, zIndex: 1,
            }} />
          </div>
        ))}
      </div>

      {/* Step cards */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '0.75rem',
      }}>
        {STEPS.map((step) => (
          <div key={step.num} className="s10b-card" style={{
            padding: '1.5rem 1.25rem',
            borderRadius: '1rem',
            background: step.trackable ? '#f8fafc' : '#fff1f2',
            border: step.trackable ? '1px solid #e2e8f0' : '2px dashed #fecdd3',
            display: 'flex', flexDirection: 'column', gap: '0.75rem',
          }}>
            {/* Step number */}
            <span style={{
              fontSize: '2rem', fontWeight: 800, lineHeight: 1,
              color: step.trackable ? '#94a3b8' : '#f87171',
              letterSpacing: '-0.02em',
            }}>
              {step.num}
            </span>

            {/* Label */}
            <p style={{
              fontWeight: 700, fontSize: '0.9375rem', lineHeight: 1.3,
              color: step.trackable ? '#0f172a' : '#e11d48',
            }}>
              {step.label}
            </p>

            {/* Description */}
            <p style={{
              fontSize: '0.75rem', lineHeight: 1.5,
              color: step.trackable ? '#64748b' : '#9f1239',
            }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="s10b-footer" style={{
        textAlign: 'center', fontSize: '1.125rem', fontWeight: 600,
        color: '#64748b', lineHeight: 1.7, marginTop: '2.5rem',
      }}>
        광고비를 쓰고 있지만, 그 광고가 <strong style={{ color: '#0f172a' }}>실제 환자를 데려왔는지</strong> 알기 어렵습니다
      </p>
    </SlideLayout>
  )
}

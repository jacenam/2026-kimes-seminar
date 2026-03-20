import { useRef } from 'react'
import { ConnectionSignal } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

export default function Slide06_DoctalkIntro() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s06-title', { opacity: 0, y: 30, duration: 0.7 })
      .from('.s06-box-center', { opacity: 0, scale: 0.8, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.3')
      .from('.s06-connector-left', { scaleX: 0, transformOrigin: 'right center', duration: 0.7, ease: 'power2.inOut' }, '-=0.2')
      .from('.s06-connector-right', { scaleX: 0, transformOrigin: 'left center', duration: 0.7, ease: 'power2.inOut' }, '-=0.5')
      .from('.s06-box-left', { opacity: 0, x: -40, duration: 0.6 }, '-=0.3')
      .from('.s06-box-right', { opacity: 0, x: 40, duration: 0.6 }, '-=0.5')
      .from('.s06-dot', { opacity: 0, scale: 0, stagger: 0.05, duration: 0.3 }, '-=0.4')
      .from('.s06-desc', { opacity: 0, y: 20, duration: 0.6 }, '-=0.2')
  })

  const cardBase = {
    padding: '2rem 1.75rem',
    borderRadius: '1rem',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
  }

  const connectorDot = {
    width: '8px', height: '8px', borderRadius: '50%',
    background: '#cbd5e1', position: 'absolute', top: '50%',
    transform: 'translateY(-50%)', zIndex: 3,
  }

  return (
    <SlideLayout id="slide-06" ref={ref}>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', height: '100%', justifyContent: 'center',
      }}>
        {/* Title */}
        <div className="s06-title" style={{ marginBottom: '3rem' }}>
          <p className="section-label">SOLUTION</p>
          <h2 style={{
            fontSize: '2.75rem', fontWeight: 900, color: '#0f172a',
            lineHeight: 1.3, letterSpacing: '-0.02em',
          }}>
            <span style={{ color: 'var(--color-primary)' }}>데이터 연결 1:</span> 온라인 예약과 EMR 연동
          </h2>
        </div>

        {/* Connection diagram */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '100%', maxWidth: '960px', marginTop: '2rem', marginBottom: '2rem',
          position: 'relative',
        }}>
          {/* Left - 네이버 예약 */}
          <div className="s06-box-left" style={{
            ...cardBase, flex: '0 0 200px',
            background: 'white', border: '1.5px solid #e2e8f0',
            boxShadow: '0 8px 32px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
          }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '0.75rem',
              background: '#f0fdf4', border: '1px solid #bbf7d0',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 0.75rem',
            }}>
              <span style={{ fontSize: '1.125rem' }}>📋</span>
            </div>
            <p style={{ fontWeight: 800, fontSize: '1.125rem', color: '#0f172a', marginBottom: '0.25rem' }}>
              네이버 예약
            </p>
            <p style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>환자 온라인 예약</p>
          </div>

          {/* Left connector — bidirectional */}
          <div className="s06-connector-left" style={{
            flex: 1, position: 'relative', margin: '0 -1px',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '8px', padding: '0 0.5rem',
          }}>
            {/* Forward arrow (→) */}
            <div style={{
              width: '100%', height: '2px', background: '#e2e8f0',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', right: '-1px', top: '-4px',
                width: 0, height: 0,
                borderLeft: '7px solid var(--color-primary)',
                borderTop: '5px solid transparent', borderBottom: '5px solid transparent',
              }} />
              <div className="s06-dot" style={{ ...connectorDot, left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
            {/* Backward arrow (←) */}
            <div style={{
              width: '100%', height: '2px', background: '#e2e8f0',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', left: '-1px', top: '-4px',
                width: 0, height: 0,
                borderRight: '7px solid #94a3b8',
                borderTop: '5px solid transparent', borderBottom: '5px solid transparent',
              }} />
            </div>
          </div>

          {/* Center - 닥톡예약 */}
          <div className="s06-box-center" style={{
            ...cardBase, flex: '0 0 220px',
            background: 'var(--color-primary)',
            boxShadow: '0 16px 48px rgba(47, 208, 150, 0.25), 0 4px 12px rgba(47, 208, 150, 0.15)',
            border: 'none',
          }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 0.75rem',
            }}>
              <ConnectionSignal size={24} style={{ color: 'white' }} />
            </div>
            <p style={{ fontWeight: 900, fontSize: '1.375rem', color: 'white', marginBottom: '0.25rem' }}>
              닥톡예약
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.75)' }}>통합 중개</p>

            {/* Top/bottom vertical connectors from center card */}
            <div style={{
              position: 'absolute', top: '-28px', left: '50%', transform: 'translateX(-50%)',
              width: '2px', height: '28px', background: '#e2e8f0',
            }} />
            <div className="s06-dot" style={{
              ...connectorDot, top: '-32px', left: '50%', transform: 'translateX(-50%)',
            }} />
            <div style={{
              position: 'absolute', bottom: '-28px', left: '50%', transform: 'translateX(-50%)',
              width: '2px', height: '28px', background: '#e2e8f0',
            }} />
            <div className="s06-dot" style={{
              ...connectorDot, top: 'auto', bottom: '-32px', left: '50%', transform: 'translateX(-50%)',
            }} />
          </div>

          {/* Right connector — bidirectional */}
          <div className="s06-connector-right" style={{
            flex: 1, position: 'relative', margin: '0 -1px',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '8px', padding: '0 0.5rem',
          }}>
            {/* Forward arrow (→) */}
            <div style={{
              width: '100%', height: '2px', background: '#e2e8f0',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', right: '-1px', top: '-4px',
                width: 0, height: 0,
                borderLeft: '7px solid #94a3b8',
                borderTop: '5px solid transparent', borderBottom: '5px solid transparent',
              }} />
              <div className="s06-dot" style={{ ...connectorDot, left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
            {/* Backward arrow (←) */}
            <div style={{
              width: '100%', height: '2px', background: '#e2e8f0',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', left: '-1px', top: '-4px',
                width: 0, height: 0,
                borderRight: '7px solid var(--color-primary)',
                borderTop: '5px solid transparent', borderBottom: '5px solid transparent',
              }} />
            </div>
          </div>

          {/* Right - 병원 EMR */}
          <div className="s06-box-right" style={{
            ...cardBase, flex: '0 0 200px',
            background: 'white', border: '1.5px solid #e2e8f0',
            boxShadow: '0 8px 32px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
          }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '0.75rem',
              background: '#eff6ff', border: '1px solid #bfdbfe',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 0.75rem',
            }}>
              <span style={{ fontSize: '1.125rem' }}>🏥</span>
            </div>
            <p style={{ fontWeight: 800, fontSize: '1.125rem', color: '#0f172a', marginBottom: '0.25rem' }}>
              병원 EMR
            </p>
            <p style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>환자 기록 시스템</p>
          </div>
        </div>

        {/* Description */}
        <div className="s06-desc" style={{ maxWidth: '720px', textAlign: 'center', marginTop: '4rem' }}>
          <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.8 }}>
            닥프렌즈는 3년 전부터 단절된 예약 채널을 통합하는
            <strong style={{ color: '#0f172a' }}> '닥톡예약'</strong>을 구축해왔습니다.
            <br />
            첫 번째 해결 과제는 <strong style={{ color: '#0f172a' }}>온라인 플랫폼 예약 정보의 EMR 자동 연동</strong>이었습니다.
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}

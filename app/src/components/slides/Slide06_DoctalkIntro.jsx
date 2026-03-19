import { useRef } from 'react'
import { ConnectionSignal, ArrowRight } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

export default function Slide06_DoctalkIntro() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s06-title', { opacity: 0, y: 30, duration: 0.7 })
      .from('.s06-box-left', { opacity: 0, x: -60, duration: 0.7 }, '-=0.3')
      .from('.s06-line', { scaleX: 0, transformOrigin: 'left center', duration: 0.8, ease: 'power2.inOut' }, '-=0.3')
      .from('.s06-box-center', { opacity: 0, scale: 0.8, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.3')
      .from('.s06-line-right', { scaleX: 0, transformOrigin: 'left center', duration: 0.8, ease: 'power2.inOut' }, '-=0.3')
      .from('.s06-box-right', { opacity: 0, x: 60, duration: 0.7 }, '-=0.3')
      .from('.s06-arrow-label', { opacity: 0, y: 10, duration: 0.5 }, '-=0.2')
      .from('.s06-desc', { opacity: 0, y: 20, duration: 0.6 }, '-=0.2')
  })

  return (
    <SlideLayout id="slide-06" ref={ref}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: '100%', justifyContent: 'center' }}>
        {/* Title */}
        <div className="s06-title" style={{ marginBottom: '3.5rem' }}>
          <p className="section-label">SOLUTION</p>
          <h2 style={{
            fontSize: '2.75rem', fontWeight: 900, color: '#0f172a',
            lineHeight: 1.3, letterSpacing: '-0.02em',
          }}>
            흩어진 예약 창구를 하나로,{' '}
            <span style={{ color: 'var(--color-primary)' }}>닥톡예약</span>
          </h2>
        </div>

        {/* Connection diagram */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 0, width: '100%', maxWidth: '900px', marginBottom: '1.5rem',
        }}>
          {/* Left - 네이버 예약 */}
          <div className="s06-box-left" style={{
            flex: '0 0 220px', padding: '2.5rem 2rem',
            background: '#f0fdf4', border: '2px solid #22c55e',
            borderRadius: '1.25rem', textAlign: 'center',
          }}>
            <p style={{ fontWeight: 800, fontSize: '1.25rem', color: '#16a34a', marginBottom: '0.375rem' }}>네이버 예약</p>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>환자 온라인 예약</p>
          </div>

          {/* Left line — bidirectional */}
          <div className="s06-line" style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '0 0.25rem',
          }}>
            <div style={{ width: '100%', height: '3px', background: 'linear-gradient(to right, #22c55e, var(--color-primary))', borderRadius: '2px', position: 'relative' }}>
              <div style={{ position: 'absolute', right: '-2px', top: '-4px', width: 0, height: 0, borderLeft: '8px solid var(--color-primary)', borderTop: '5px solid transparent', borderBottom: '5px solid transparent' }} />
            </div>
            <div style={{ width: '100%', height: '3px', background: 'linear-gradient(to left, #22c55e, var(--color-primary))', borderRadius: '2px', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-2px', top: '-4px', width: 0, height: 0, borderRight: '8px solid #22c55e', borderTop: '5px solid transparent', borderBottom: '5px solid transparent' }} />
            </div>
          </div>

          {/* Center - 닥톡예약 */}
          <div className="s06-box-center" style={{
            flex: '0 0 200px', padding: '2.5rem 2rem',
            background: 'var(--color-primary)', borderRadius: '1.25rem',
            textAlign: 'center',
            boxShadow: '0 16px 48px rgba(47, 208, 150, 0.3)',
          }}>
            <ConnectionSignal size={32} style={{ color: 'white', marginBottom: '0.5rem' }} />
            <p style={{ fontWeight: 900, fontSize: '1.375rem', color: 'white' }}>닥톡예약</p>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>통합 중개</p>
          </div>

          {/* Right line — bidirectional */}
          <div className="s06-line-right" style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '0 0.25rem',
          }}>
            <div style={{ width: '100%', height: '3px', background: 'linear-gradient(to right, var(--color-primary), #3b82f6)', borderRadius: '2px', position: 'relative' }}>
              <div style={{ position: 'absolute', right: '-2px', top: '-4px', width: 0, height: 0, borderLeft: '8px solid #3b82f6', borderTop: '5px solid transparent', borderBottom: '5px solid transparent' }} />
            </div>
            <div style={{ width: '100%', height: '3px', background: 'linear-gradient(to left, var(--color-primary), #3b82f6)', borderRadius: '2px', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-2px', top: '-4px', width: 0, height: 0, borderRight: '8px solid var(--color-primary)', borderTop: '5px solid transparent', borderBottom: '5px solid transparent' }} />
            </div>
          </div>

          {/* Right - 병원 EMR */}
          <div className="s06-box-right" style={{
            flex: '0 0 220px', padding: '2.5rem 2rem',
            background: '#eff6ff', border: '2px solid #3b82f6',
            borderRadius: '1.25rem', textAlign: 'center',
          }}>
            <p style={{ fontWeight: 800, fontSize: '1.25rem', color: '#2563eb', marginBottom: '0.375rem' }}>병원 EMR</p>
            <p style={{ fontSize: '0.875rem', color: '#64748b' }}>환자 기록 시스템</p>
          </div>
        </div>

        {/* Arrow label */}
        <div className="s06-arrow-label" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '0.5rem', marginBottom: '3rem',
        }}>
          <ArrowRight size={20} style={{ color: 'var(--color-primary)' }} />
          <p style={{ fontSize: '1rem', color: '#64748b', fontWeight: 500 }}>
            예약 데이터가 양방향으로 실시간 연동됩니다
          </p>
        </div>

        {/* Description */}
        <div className="s06-desc" style={{
          maxWidth: '720px', textAlign: 'center',
        }}>
          <p style={{
            fontSize: '1.125rem', color: '#475569', lineHeight: 1.8,
          }}>
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

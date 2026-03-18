import { useRef } from 'react'
import { ConnectionSignal, ArrowRight } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

export default function Slide06_DoctalkIntro() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s06-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s06-desc', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
      .from('.s06-box-left', { opacity: 0, x: -60, duration: 0.7 }, '-=0.1')
      .from('.s06-line', { scaleX: 0, transformOrigin: 'left center', duration: 0.8, ease: 'power2.inOut' }, '-=0.3')
      .from('.s06-box-center', { opacity: 0, scale: 0.8, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.3')
      .from('.s06-line-right', { scaleX: 0, transformOrigin: 'left center', duration: 0.8, ease: 'power2.inOut' }, '-=0.3')
      .from('.s06-box-right', { opacity: 0, x: 60, duration: 0.7 }, '-=0.3')
  })

  return (
    <SlideLayout id="slide-06" ref={ref}>
      <div className="s06-header">
        <p className="section-label">SOLUTION</p>
        <h2 className="section-title">
          <ConnectionSignal size={32} style={{ verticalAlign: 'middle', marginRight: '0.5rem', color: 'var(--color-primary)' }} />
          '닥톡예약' 중개 서비스
        </h2>
        <p className="section-subtitle">
          3년 전부터 <strong style={{ color: '#1e293b' }}>'연결'</strong>의 문제에 집중
        </p>
      </div>

      <p className="s06-desc" style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '640px' }}>
        흩어진 예약 창구를 하나로 묶다 -- 닥프렌즈는 단절된 예약 채널을 통합하는
        <strong style={{ color: '#1e293b' }}> '닥톡예약'</strong>을 만들었습니다.
        <br />
        가장 먼저 해결한 문제: 네이버에서 예약한 환자가 병원 EMR에 반영되지 않는 문제.
      </p>

      {/* Connection visual */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {/* Left box - 네이버 예약 */}
        <div
          className="s06-box-left"
          style={{
            flex: '0 0 200px',
            padding: '2rem 1.5rem',
            background: '#f0fdf4',
            border: '2px solid #22c55e',
            borderRadius: '1rem',
            textAlign: 'center',
          }}
        >
          <p style={{ fontWeight: 800, fontSize: '1rem', color: '#16a34a', marginBottom: '0.25rem' }}>네이버 예약</p>
          <p style={{ fontSize: '0.75rem', color: '#64748b' }}>환자 온라인 예약</p>
        </div>

        {/* Left connecting line */}
        <div
          className="s06-line"
          style={{
            flex: 1,
            height: '3px',
            background: 'linear-gradient(to right, #22c55e, var(--color-primary))',
            borderRadius: '2px',
          }}
        />

        {/* Center box - 닥톡예약 */}
        <div
          className="s06-box-center"
          style={{
            flex: '0 0 180px',
            padding: '2rem 1.5rem',
            background: 'var(--color-primary)',
            borderRadius: '1rem',
            textAlign: 'center',
            boxShadow: '0 12px 40px rgba(47, 208, 150, 0.3)',
          }}
        >
          <ConnectionSignal size={28} style={{ color: 'white', marginBottom: '0.5rem' }} />
          <p style={{ fontWeight: 800, fontSize: '1.125rem', color: 'white' }}>닥톡예약</p>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>통합 중개</p>
        </div>

        {/* Right connecting line */}
        <div
          className="s06-line-right"
          style={{
            flex: 1,
            height: '3px',
            background: 'linear-gradient(to right, var(--color-primary), #3b82f6)',
            borderRadius: '2px',
          }}
        />

        {/* Right box - 병원 EMR */}
        <div
          className="s06-box-right"
          style={{
            flex: '0 0 200px',
            padding: '2rem 1.5rem',
            background: '#eff6ff',
            border: '2px solid #3b82f6',
            borderRadius: '1rem',
            textAlign: 'center',
          }}
        >
          <p style={{ fontWeight: 800, fontSize: '1rem', color: '#2563eb', marginBottom: '0.25rem' }}>병원 EMR</p>
          <p style={{ fontSize: '0.75rem', color: '#64748b' }}>환자 기록 시스템</p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <ArrowRight size={20} style={{ color: 'var(--color-primary)', marginRight: '0.5rem' }} />
        <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
          예약 데이터가 실시간으로 병원 시스템에 연동됩니다
        </p>
      </div>
    </SlideLayout>
  )
}

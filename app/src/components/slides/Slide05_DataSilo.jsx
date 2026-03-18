import { useRef } from 'react'
import { DataError, Link } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const silos = [
  { label: '네이버', height: '70%', color: '#22c55e' },
  { label: '카카오', height: '55%', color: '#facc15' },
  { label: '인스타', height: '60%', color: '#e879f9' },
  { label: 'EMR', height: '80%', color: '#60a5fa' },
  { label: '기타', height: '45%', color: '#94a3b8' },
]

export default function Slide05_DataSilo() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s05-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s05-bar', {
        scaleY: 0,
        transformOrigin: 'bottom center',
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      }, '-=0.2')
      .from('.s05-bar-label', {
        opacity: 0,
        y: 10,
        duration: 0.4,
        stagger: 0.1,
      }, '-=0.4')
      .from('.s05-disconnect', {
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
      }, '-=0.3')
      .from('.s05-cta', { opacity: 0, y: 30, duration: 0.7 }, '+=0.2')
  })

  return (
    <SlideLayout id="slide-05" ref={ref}>
      <div className="s05-header">
        <p className="section-label">ROOT CAUSE</p>
        <h2 className="section-title">
          <DataError size={32} style={{ verticalAlign: 'middle', marginRight: '0.5rem', color: 'var(--color-primary)' }} />
          데이터 사일로(Data Silo)
        </h2>
        <p className="section-subtitle">
          정보가 부족해서가 아닙니다. <strong style={{ color: '#1e293b' }}>데이터 단절</strong>의 문제입니다.
        </p>
      </div>

      {/* Disconnected pillars */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: '1.5rem',
          height: '220px',
          marginBottom: '2.5rem',
        }}
      >
        {silos.map((silo, i) => (
          <div key={silo.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
            <div
              className="s05-bar"
              style={{
                width: '100%',
                maxWidth: '100px',
                height: silo.height,
                background: silo.color,
                borderRadius: '0.75rem 0.75rem 0 0',
                opacity: 0.85,
                position: 'relative',
              }}
            />
            <span className="s05-bar-label" style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#475569' }}>
              {silo.label}
            </span>
            {/* Disconnect indicators between bars */}
            {i < silos.length - 1 && (
              <span
                className="s05-disconnect"
                style={{
                  position: 'absolute',
                  display: 'none',
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Disconnect visual line */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="s05-disconnect"
            style={{
              display: 'inline-block',
              width: '40px',
              height: '2px',
              background: '#ef4444',
              position: 'relative',
            }}
          >
            <span style={{
              position: 'absolute',
              top: '-6px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#ef4444',
              fontSize: '0.75rem',
              fontWeight: 700,
            }}>
              ✕
            </span>
          </span>
        ))}
      </div>

      {/* CTA */}
      <div
        className="s05-cta"
        style={{
          textAlign: 'center',
          padding: '1.5rem 2rem',
          background: 'var(--color-primary-light)',
          borderRadius: '1rem',
          border: '2px solid var(--color-primary)',
        }}
      >
        <Link size={24} style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }} />
        <p style={{ fontWeight: 700, fontSize: '1.125rem', color: 'var(--color-primary-dark)' }}>
          이 단절된 연결고리를 잇는 것 = 병원 경영 뉴노멀의 시작
        </p>
      </div>
    </SlideLayout>
  )
}

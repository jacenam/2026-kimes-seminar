import { useRef } from 'react'
import { Link } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

export default function Slide05_DataSilo() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s05-title', { opacity: 0, y: 30, duration: 0.7 })
      .from('.s05-image', { opacity: 0, scale: 0.95, duration: 1, ease: 'power2.out' }, '-=0.3')
      .from('.s05-cta', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
  })

  return (
    <SlideLayout id="slide-05" ref={ref}>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', height: '100%', justifyContent: 'center',
      }}>
        {/* Title */}
        <div className="s05-title" style={{ marginBottom: '2rem' }}>
          <p className="section-label">ROOT CAUSE</p>
          <h2 style={{
            fontSize: '2.25rem', fontWeight: 700, color: '#0f172a',
            lineHeight: 1.4, letterSpacing: '-0.01em',
          }}>
            정보가 부족한 게 아닙니다
            <br />
            <span style={{ color: 'var(--color-primary)' }}>데이터 단절</span>의 문제입니다
          </h2>
        </div>

        {/* 3D Data Silo Image */}
        <div className="s05-image" style={{ marginBottom: '2rem', maxWidth: '800px', width: '100%' }}>
          <img
            src="/images/data-silo.png"
            alt="플랫폼 광고 데이터와 병원 EMR 데이터 간의 단절"
            style={{
              width: '100%', height: 'auto',
              borderRadius: '1rem',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* CTA */}
        <div className="s05-cta" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '0.75rem', padding: '1.25rem 2.5rem',
          background: 'var(--color-primary-light)', borderRadius: '1rem',
          border: '1px solid rgba(47, 208, 150, 0.2)',
        }}>
          <Link size={22} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
          <p style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--color-primary-dark)' }}>
            이 단절된 연결고리를 잇는 것 = 병원 경영 뉴노멀의 시작
          </p>
        </div>
      </div>
    </SlideLayout>
  )
}

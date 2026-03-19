import { useRef } from 'react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const BASE = import.meta.env.BASE_URL

const ROW1 = [
  `${BASE}images/logos/emr/비트컴퓨터 로고.png`,
  `${BASE}images/logos/emr/이지스헬스케어 로고.png`,
  `${BASE}images/logos/emr/동의보감 로고.png`,
  `${BASE}images/logos/emr/전능IT 로고.png`,
  `${BASE}images/logos/emr/네오소프트뱅크 로고.png`,
  `${BASE}images/logos/emr/다솜메디케어 로고.png`,
  `${BASE}images/logos/emr/아비쥬의원 로고.png`,
  `${BASE}images/logos/emr/자생한방병원 로고.png`,
  `${BASE}images/logos/emr/함소아한의원 로고.png`,
  `${BASE}images/logos/emr/와이소프트 로고.png`,
]

const ROW2 = [
  `${BASE}images/logos/emr/HD정션 로고.png`,
  `${BASE}images/logos/emr/MD마케팅 로고.png`,
  `${BASE}images/logos/emr/MD소프트 로고.png`,
  `${BASE}images/logos/emr/메센츠 로고.png`,
  `${BASE}images/logos/emr/메이드유 로고.png`,
  `${BASE}images/logos/emr/모션랩스 로고.png`,
  `${BASE}images/logos/emr/뷰티라운지 로고.png`,
  `${BASE}images/logos/emr/아프닥 로고.png`,
  `${BASE}images/logos/emr/웨이브코드 로고.svg.png`,
  `${BASE}images/logos/emr/트라이업 로고.png`,
]

function MarqueeRow({ logos, direction = 'left', duration = 30 }) {
  // Duplicate logos enough times to fill the gap during scroll
  const items = [...logos, ...logos, ...logos]
  const animName = direction === 'left' ? 'marqueeLeft' : 'marqueeRight'

  return (
    <div style={{
      overflow: 'hidden',
      maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '3rem',
        width: 'max-content',
        animation: `${animName} ${duration}s linear infinite`,
      }}>
        {items.map((logo, i) => (
          <div key={i} style={{
            flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: '5.5rem', width: '10rem',
            padding: '0.5rem',
          }}>
            <img src={logo} alt="" style={{
              maxWidth: '100%', maxHeight: '100%', objectFit: 'contain',
            }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Slide08_EmrIntegration() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s08-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s08-marquee-row', { opacity: 0, y: 20, stagger: 0.15, duration: 0.6 }, '-=0.2')
  })

  return (
    <SlideLayout id="slide-08" ref={ref}>
      {/* Keyframes */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Header */}
      <div className="s08-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p className="section-label">EMR NETWORK</p>
        <h2 className="section-title">
          데이터 연결의 확장: 32개 전자차트사 연동
        </h2>
        <p style={{
          fontSize: '1.125rem', fontWeight: 500, color: '#64748b', lineHeight: 1.7,
          maxWidth: '680px', margin: '0 auto',
        }}>
          더 많은 1·2차 의료기관이 플랫폼 연동을 통한 환자 유입 증대를 경험할 수 있도록,<br />
          EMR 파트너사 연동을 지속적으로 확대하고 있습니다
        </p>
      </div>

      {/* Marquee rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="s08-marquee-row">
          <MarqueeRow logos={ROW1} direction="left" duration={28} />
        </div>
        <div className="s08-marquee-row">
          <MarqueeRow logos={ROW2} direction="right" duration={32} />
        </div>
      </div>

    </SlideLayout>
  )
}

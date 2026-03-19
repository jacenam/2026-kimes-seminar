import { useRef } from 'react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const OFFLINE = [
  { label: '버스 광고', desc: '노선별 외부 래핑·배너', emoji: '🚌' },
  { label: '택배차 광고', desc: '택배 차량 외부 래핑 광고', emoji: '🚚' },
  { label: '엘리베이터 디스플레이', desc: '아파트·빌딩 영상 광고', emoji: '🖥️' },
]

const ONLINE = [
  { logo: '/images/logos/네이버 로고.png', label: '네이버', desc: '검색광고, 플레이스, 블로그' },
  { logo: '/images/logos/카카오 로고.png', label: '카카오', desc: '채널, 비즈보드 광고' },
  { logo: '/images/logos/당근 로고.png', label: '당근', desc: '동네 병원 광고' },
  { logo: '/images/logos/강남언니 로고.png', label: '강남언니', desc: '시술/미용 전문 플랫폼' },
  { logo: '/images/logos/인스타그램 로고.png', label: '인스타그램', desc: '피드·릴스·숏폼 광고' },
  { logo: '/images/logos/유튜브 로고.png', label: '유튜브', desc: '영상·숏츠 광고' },
]

export default function Slide02b_AdChannels() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s02b-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s02b-group-label', { opacity: 0, y: 20, duration: 0.4, stagger: 0.15 }, '-=0.2')
      .from('.s02b-card', { opacity: 0, y: 30, scale: 0.95, stagger: 0.08, duration: 0.5, ease: 'power2.out' }, '-=0.3')
  })

  return (
    <SlideLayout id="slide-02b" ref={ref}>
      <div className="s02b-header">
        <p className="section-label">AD CHANNELS</p>
        <h2 className="section-title">병원 광고 채널 운영의 복잡도 증가</h2>
        <p className="section-subtitle">
          오프라인부터 온라인까지, 병원 광고의 현재 모습
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '3rem', alignItems: 'stretch' }}>
        {/* Offline */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="s02b-group-label" style={{
            fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em',
            color: '#94a3b8', textTransform: 'uppercase', marginBottom: '1rem',
            paddingBottom: '0.75rem', borderBottom: '2px solid #e2e8f0',
          }}>
            Offline
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
            {OFFLINE.map(({ label, desc, emoji }) => (
              <div key={label} className="s02b-card" style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                padding: '1.25rem 1.5rem', flex: 1,
                background: '#f8fafc', borderRadius: '1rem',
                border: '1px solid #e2e8f0',
              }}>
                <div style={{
                  width: '3.5rem', height: '3.5rem', borderRadius: '0.75rem',
                  background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, fontSize: '1.5rem',
                }}>
                  {emoji}
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#1e293b' }}>{label}</p>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="s02b-group-label" style={{
            fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.1em',
            color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '1rem',
            paddingBottom: '0.75rem', borderBottom: '2px solid var(--color-primary)',
          }}>
            Online
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '0.75rem', flex: 1 }}>
            {ONLINE.map(({ logo, icon: Icon, label, desc }) => (
              <div key={label} className="s02b-card" style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.625rem',
                padding: '1.25rem 1rem',
                background: '#f8fafc', borderRadius: '1rem',
                border: '1px solid #e2e8f0',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '4.5rem', height: '4.5rem', borderRadius: '50%',
                  background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                }}>
                  <img src={logo} alt={label} style={{ width: '3rem', height: '3rem', objectFit: 'contain' }} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#1e293b' }}>{label}</p>
                  <p style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

import { useRef } from 'react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const PLATFORMS = [
  { name: '네이버', desc: '검색·플레이스·예약', mau: 'MAU 4,500만', logo: `${import.meta.env.BASE_URL}images/logos/네이버 로고.png` },
  { name: '당근', desc: '동네 병원 추천·예약', mau: 'MAU 2,000만', logo: `${import.meta.env.BASE_URL}images/logos/당근 로고.png` },
  { name: '카카오', desc: '채널·톡·예약 연동', mau: 'MAU 4,500만', logo: `${import.meta.env.BASE_URL}images/logos/카카오 로고.png` },
  { name: '강남언니', desc: '시술·미용 전문 플랫폼', mau: '뷰티·의료 특화', logo: `${import.meta.env.BASE_URL}images/logos/강남언니 로고.png` },
  { name: '구글', desc: '검색광고·지도·예약', mau: '글로벌 검색 1위', logo: `${import.meta.env.BASE_URL}images/logos/구글 로고.png` },
  { name: '블라인드', desc: '직장인 커뮤니티 연동', mau: 'MAU 1,200만', logo: `${import.meta.env.BASE_URL}images/logos/블라인드 로고.png`, upcoming: true },
  { name: '키즈노트', desc: '어린이집·학부모 채널', mau: '전국 어린이집 90%+', logo: `${import.meta.env.BASE_URL}images/logos/키즈노트 로고.png`, upcoming: true },
]

export default function Slide07_PlatformExpansion() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s07-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s07-cell', { opacity: 0, y: 20, stagger: 0.08, duration: 0.5, ease: 'power2.out' }, '-=0.2')
      .from('.s07-bottom', { opacity: 0, y: 15, duration: 0.5 }, '-=0.2')
  })

  return (
    <SlideLayout id="slide-07" ref={ref}>
      <div className="s07-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <p className="section-label">PLATFORM EXPANSION</p>
        <h2 className="section-title">
          인프라 확장: 멀티 플랫폼 통합 중개
        </h2>
      </div>

      {/* Grid layout */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        border: '1px solid #e2e8f0', borderRadius: '1rem', overflow: 'hidden',
        marginBottom: '2rem',
      }}>
        {PLATFORMS.map((p, i) => (
          <div key={p.name} className="s07-cell" style={{
            padding: '2rem 1.5rem',
            borderRight: (i + 1) % 4 !== 0 ? '1px solid #e2e8f0' : 'none',
            borderBottom: i < 4 ? '1px solid #e2e8f0' : 'none',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            textAlign: 'center', gap: '0.75rem',
            background: p.upcoming ? '#fafafa' : 'white',
            opacity: p.upcoming ? 0.65 : 1,
          }}>
            <img src={p.logo} alt={p.name} style={{ width: '3.5rem', height: '3.5rem', objectFit: 'contain' }} />

            <div>
              <p style={{ fontWeight: 800, fontSize: '1.0625rem', color: '#0f172a', marginBottom: '0.25rem' }}>
                {p.name}
                {p.upcoming && (
                  <span style={{
                    fontSize: '0.5625rem', fontWeight: 700, color: '#94a3b8',
                    background: '#f1f5f9', padding: '0.125rem 0.5rem',
                    borderRadius: '2rem', marginLeft: '0.375rem', verticalAlign: 'middle',
                  }}>예정</span>
                )}
              </p>
              <p style={{ fontSize: '0.8125rem', color: '#475569', marginBottom: '0.25rem' }}>{p.desc}</p>
              <p style={{ fontSize: '0.6875rem', color: 'var(--color-primary)', fontWeight: 600 }}>{p.mau}</p>
            </div>
          </div>
        ))}

        {/* Empty cell to fill the 4th column in 2nd row */}
        <div className="s07-cell" style={{
          padding: '2rem 1.5rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', textAlign: 'center',
          background: '#fafafa',
        }}>
          <p style={{ fontSize: '1.5rem', color: '#cbd5e1', marginBottom: '0.375rem' }}>+</p>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>추가 확장 예정</p>
        </div>
      </div>

      {/* Bottom description */}
      <p className="s07-bottom" style={{
        textAlign: 'center', fontSize: '1rem', color: '#64748b', lineHeight: 1.7,
        maxWidth: '720px', margin: '0 auto',
      }}>
        사용자들이 의료 정보를 검색하고 병원을 추천받는 패턴에 따라,
        <br />
        <strong style={{ color: '#0f172a' }}>대규모 트래픽</strong>이 발생하는 당근과 카카오, 강남언니, 구글까지 연동을 확장했습니다.
      </p>
    </SlideLayout>
  )
}

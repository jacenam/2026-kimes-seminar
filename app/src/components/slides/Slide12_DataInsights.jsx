import { useRef } from 'react'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const barHeights = [35, 48, 42, 58, 65, 52, 72, 68, 60, 80, 75, 88]
const months = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']

const regionData = [
  { name: '강남·서초', pct: 100, count: '3,412' },
  { name: '마포·용산', pct: 72, count: '2,456' },
  { name: '송파·강동', pct: 55, count: '1,877' },
  { name: '분당·판교', pct: 40, count: '1,364' },
]

export default function Slide12_DataInsights() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s12-title', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s12-card', { opacity: 0, y: 25, scale: 0.96, stagger: 0.08, duration: 0.6, ease: 'power2.out' }, '-=0.2')

    const counters = ref.current.querySelectorAll('[data-count]')
    counters.forEach((el) => {
      const target = parseFloat(el.dataset.count)
      const suffix = el.dataset.suffix || ''
      const obj = { val: 0 }
      tl.to(obj, {
        val: target, duration: 1.4, ease: 'power1.out',
        onUpdate() {
          el.textContent = (target % 1 !== 0 ? obj.val.toFixed(1) : Math.round(obj.val).toLocaleString()) + suffix
        },
      }, '-=1.2')
    })

    tl.from('.s12-bar', { scaleY: 0, transformOrigin: 'bottom', stagger: 0.04, duration: 0.5, ease: 'back.out(1.3)' }, '-=1')

    const fills = ref.current.querySelectorAll('.s12-fill')
    fills.forEach((fill) => {
      gsap.set(fill, { width: '0%' })
      tl.to(fill, { width: fill.dataset.width + '%', duration: 0.8, ease: 'power2.out' }, '-=0.7')
    })

  })

  const card = {
    background: 'white',
    borderRadius: '1rem',
    padding: '1.25rem 1.5rem',
    border: '1px solid rgba(47,208,150,0.15)',
    boxShadow: '0 2px 8px rgba(47,208,150,0.06)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
  }

  const kpiLabel = { fontSize: '0.75rem', color: '#64748b', fontWeight: 600, marginBottom: '0.5rem' }
  const kpiNumber = { fontSize: '1.75rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }

  return (
    <section id="slide-12" ref={ref} className="slide" style={{ background: 'white' }}>
      <style>{`
        .s12-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(47,208,150,0.12) !important;
          border-color: var(--color-primary) !important;
        }
        .s12-recommend {
          animation: s12glow 1s ease-in-out infinite;
        }
        .s12-recommend::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 1.1rem;
          border: 2px solid var(--color-primary);
          animation: s12ring 1s ease-in-out infinite;
        }
        @keyframes s12glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(47,208,150,0.4); }
          50% { box-shadow: 0 0 20px 6px rgba(47,208,150,0.3); }
        }
        @keyframes s12ring {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.03); }
        }
      `}</style>

      <div className="slide-content">
        {/* Title */}
        <div className="s12-title" style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            DATA-DRIVEN INSIGHTS
          </p>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>데이터가 답하는 시대</h2>
          <p style={{ fontSize: '1rem', fontWeight: 500, color: '#64748b', lineHeight: 1.7 }}>
            막연한 추측이 아닌, 병원에 최적화된 플랫폼과 광고 상품, 적정 비용을 데이터 기반으로 추천받는 시대
          </p>
        </div>

        {/* Dashboard grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1.3fr 1.5fr',
          gridTemplateRows: 'auto auto auto',
          gap: '0.875rem',
        }}>

          {/* KPI 1 — 총 예약 건수 */}
          <div className="s12-card" style={card}>
            <p style={kpiLabel}>총 예약 건수</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.375rem' }}>
              <p data-count="29700" data-suffix="" style={{ ...kpiNumber, color: 'var(--color-primary)' }}>29,700</p>
              <span style={{ fontSize: '0.6875rem', color: '#64748b' }}>건</span>
            </div>
            <span style={{ fontSize: '0.625rem', fontWeight: 700, color: '#2fd096', background: 'var(--color-primary-light)', padding: '0.1rem 0.375rem', borderRadius: '0.25rem', marginTop: '0.375rem', display: 'inline-block' }}>+23% vs 지난달</span>
          </div>

          {/* KPI 2 — 광고 유입 전환 */}
          <div className="s12-card" style={card}>
            <p style={kpiLabel}>광고 → 예약 전환</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.375rem' }}>
              <p data-count="8540" data-suffix="" style={kpiNumber}>8,540</p>
              <span style={{ fontSize: '0.6875rem', color: '#64748b' }}>건</span>
            </div>
            <span style={{ fontSize: '0.625rem', fontWeight: 700, color: '#2fd096', background: 'var(--color-primary-light)', padding: '0.1rem 0.375rem', borderRadius: '0.25rem', marginTop: '0.375rem', display: 'inline-block' }}>전환율 14.2%</span>
          </div>

          {/* Donut — 2 rows */}
          <div className="s12-card" style={{
            ...card, gridRow: 'span 2',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', gap: '0.75rem', padding: '1.5rem',
          }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0f172a' }}>채널별 유입 비율</p>
            <div style={{ position: 'relative', width: '110px', height: '110px' }}>
              {(() => {
                const r = 42, c = 2 * Math.PI * r
                const segments = [
                  { pct: 42, color: '#6ee7b7' },
                  { pct: 18, color: '#fdba74' },
                  { pct: 28, color: '#fde68a' },
                  { pct: 12, color: '#cbd5e1' },
                ]
                let offset = 0
                return (
                  <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                    <circle cx="50" cy="50" r={r} fill="none" stroke="#f1f5f9" strokeWidth="8" />
                    {segments.map((seg, i) => {
                      const dash = (seg.pct / 100) * c
                      const gap = c - dash
                      const currentOffset = offset
                      offset += seg.pct
                      return (
                        <circle key={i} cx="50" cy="50" r={r} fill="none"
                          stroke={seg.color} strokeWidth="8"
                          strokeDasharray={`${dash} ${gap}`}
                          strokeDashoffset={-(currentOffset / 100) * c}
                        />
                      )
                    })}
                  </svg>
                )
              })()}
              <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}>
                <span data-count="42" data-suffix="%" style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a' }}>42%</span>
                <span style={{ fontSize: '0.5625rem', color: '#94a3b8' }}>네이버</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', width: '100%' }}>
              {[
                { name: '네이버', pct: '12.5k', color: '#6ee7b7' },
                { name: '카카오', pct: '8.2k', color: '#fde68a' },
                { name: '당근', pct: '5.4k', color: '#fdba74' },
                { name: '기타', pct: '3.6k', color: '#cbd5e1' },
              ].map((ch) => (
                <div key={ch.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: ch.color }} />
                    <span style={{ fontSize: '0.6875rem', color: '#64748b' }}>{ch.name}</span>
                  </div>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#334155' }}>{ch.pct}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 지역별 유입, 3 rows */}
          <div className="s12-card" style={{
            ...card, gridRow: 'span 3', padding: '1.5rem',
            display: 'flex', flexDirection: 'column',
          }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.25rem' }}>지역별 유입</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              {regionData.map((r) => (
                <div key={r.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#334155' }}>{r.name}</span>
                    <span style={{ fontSize: '0.6875rem', color: '#94a3b8' }}>{r.count}건</span>
                  </div>
                  <div style={{ height: '6px', background: 'var(--color-primary-light)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div className="s12-fill" data-width={r.pct} style={{
                      height: '100%', background: 'var(--color-primary)', borderRadius: '3px', width: '0%',
                    }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', marginTop: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', textAlign: 'center' }}>
                <div style={{ flex: 1 }}>
                  <p data-count="82" data-suffix="%" style={{ fontSize: '1.375rem', fontWeight: 900, color: 'var(--color-primary)' }}>82%</p>
                  <p style={{ fontSize: '0.625rem', color: '#94a3b8' }}>진료과 전환율</p>
                </div>
                <div style={{ width: '1px', background: '#f1f5f9' }} />
                <div style={{ flex: 1 }}>
                  <p data-count="3.2" data-suffix="x" style={{ fontSize: '1.375rem', fontWeight: 900, color: 'var(--color-primary)' }}>3.2x</p>
                  <p style={{ fontSize: '0.625rem', color: '#94a3b8' }}>연령대 반응률</p>
                </div>
              </div>
            </div>
          </div>

          {/* KPI 3 — 실제 내원 */}
          <div className="s12-card" style={card}>
            <p style={kpiLabel}>실제 내원 환자</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.375rem' }}>
              <p data-count="5810" data-suffix="" style={kpiNumber}>5,810</p>
              <span style={{ fontSize: '0.6875rem', color: '#64748b' }}>명</span>
            </div>
            <span style={{ fontSize: '0.625rem', fontWeight: 700, color: '#2fd096', background: 'var(--color-primary-light)', padding: '0.1rem 0.375rem', borderRadius: '0.25rem', marginTop: '0.375rem', display: 'inline-block' }}>내원율 68%</span>
          </div>

          {/* KPI 4 — 노쇼 */}
          <div className="s12-card" style={card}>
            <p style={kpiLabel}>노쇼·취소</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.375rem' }}>
              <p data-count="712" data-suffix="" style={{ ...kpiNumber, color: '#ef4444' }}>712</p>
              <span style={{ fontSize: '0.6875rem', color: '#64748b' }}>건</span>
            </div>
            <span style={{ fontSize: '0.625rem', fontWeight: 700, color: '#ef4444', background: '#fef2f2', padding: '0.1rem 0.375rem', borderRadius: '0.25rem', marginTop: '0.375rem', display: 'inline-block' }}>노쇼율 8.3%</span>
          </div>

          {/* Bar chart — 2 cols */}
          <div className="s12-card" style={{ ...card, gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#0f172a' }}>월별 예약 추이</p>
              <span style={{ fontSize: '0.5625rem', fontWeight: 600, color: 'var(--color-primary)', background: 'var(--color-primary-light)', padding: '0.15rem 0.5rem', borderRadius: '1rem' }}>최근 12개월</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.375rem', height: '80px' }}>
              {barHeights.map((h, i) => (
                <div key={i} className="s12-bar" style={{
                  flex: 1, height: `${h}%`,
                  background: i >= 9 ? 'var(--color-primary)' : 'rgba(47,208,150,0.15)',
                  borderRadius: '3px 3px 0 0',
                  transition: 'background 0.3s ease',
                }} />
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.375rem', marginTop: '0.5rem' }}>
              {months.map((m) => (
                <span key={m} style={{ flex: 1, textAlign: 'center', fontSize: '0.5rem', color: '#94a3b8' }}>{m}</span>
              ))}
            </div>
          </div>

          {/* Ad recommendation card */}
          <div className="s12-card s12-recommend" style={{
            ...card,
            background: 'var(--color-primary-light)',
            border: '2px solid var(--color-primary)',
            display: 'flex', flexDirection: 'column', gap: '0.75rem',
            position: 'relative',
          }}>
            <p style={{ fontSize: '0.625rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              AI 추천
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                background: 'white', borderRadius: '0.625rem', padding: '0.5rem 0.75rem',
              }}>
                <img src={`${import.meta.env.BASE_URL}images/logos/네이버 로고.png`} alt="네이버" style={{ width: '1.25rem', height: '1.25rem', objectFit: 'contain' }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#0f172a' }}>네이버 플레이스 광고</p>
                </div>
                <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: 'var(--color-primary)' }}>+80만</span>
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                background: 'white', borderRadius: '0.625rem', padding: '0.5rem 0.75rem',
              }}>
                <img src={`${import.meta.env.BASE_URL}images/logos/당근 로고.png`} alt="당근" style={{ width: '1.25rem', height: '1.25rem', objectFit: 'contain' }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#0f172a' }}>당근 동네 병원 광고</p>
                </div>
                <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: 'var(--color-primary)' }}>+50만</span>
              </div>
            </div>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              borderTop: '1px solid rgba(47,208,150,0.15)', paddingTop: '0.5rem',
            }}>
              <span style={{ fontSize: '0.625rem', color: '#64748b' }}>추가 예산 추천</span>
              <span style={{ fontSize: '0.875rem', fontWeight: 900, color: '#0f172a' }}>+130만원</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

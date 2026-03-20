import { useRef } from 'react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

export default function Slide09_DoctalkResults() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s09-header', { opacity: 0, y: 30, duration: 0.6 })
      .from('.s09-cell', { opacity: 0, y: 20, stagger: 0.06, duration: 0.5, ease: 'power2.out' }, '-=0.2')

    // Count-up animations
    const counters = ref.current.querySelectorAll('[data-target]')
    counters.forEach((el) => {
      const target = parseFloat(el.dataset.target)
      const suffix = el.dataset.suffix || ''
      const obj = { val: 0 }
      tl.to(obj, {
        val: target,
        duration: 1.4,
        ease: 'power1.out',
        onUpdate() {
          const v = Math.round(obj.val)
          el.textContent = v.toLocaleString() + suffix
        },
      }, '-=1.2')
    })
  })

  const cellBase = {
    background: '#f4f5f6',
    borderRadius: '1rem',
    padding: '1.75rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 0,
  }

  const labelStyle = {
    fontSize: '0.8125rem',
    fontWeight: 600,
    color: '#6b7280',
    lineHeight: 1.4,
    marginBottom: '0.75rem',
  }

  const numberStyle = {
    fontSize: '3.5rem',
    fontWeight: 800,
    color: '#0f172a',
    letterSpacing: '-0.04em',
    lineHeight: 1,
  }

  return (
    <SlideLayout id="slide-09" ref={ref}>
      <div className="s09-header" style={{ marginBottom: '2rem' }}>
        <p className="section-label">RESULTS</p>
        <h2 className="section-title">닥톡예약의 성과</h2>
      </div>

      {/* Bento Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'auto auto',
        gap: '0.875rem',
      }}>
        {/* Row 1 */}

        {/* EMR 고객사 — spans 2 cols */}
        <div className="s09-cell" style={{
          ...cellBase, gridColumn: 'span 2',
        }}>
          <p style={labelStyle}>EMR 고객사 네트워크</p>
          <p data-target="25000" data-suffix="+" style={numberStyle}>
            25,000+
          </p>
        </div>

        {/* 사용 병·의원 */}
        <div className="s09-cell" style={cellBase}>
          <p style={labelStyle}>닥톡예약 사용<br />병·의원</p>
          <p data-target="4500" data-suffix="+" style={{
            ...numberStyle, fontSize: '3rem',
          }}>
            4,500+
          </p>
        </div>

        {/* 연동 전자차트사 — accent */}
        <div className="s09-cell" style={{
          ...cellBase,
          background: 'var(--color-primary)',
          color: 'white',
        }}>
          <p style={{ ...labelStyle, color: 'rgba(255,255,255,0.7)' }}>
            연동 전자차트사
          </p>
          <p data-target="32" data-suffix="개" style={{
            ...numberStyle, fontSize: '3rem', color: 'white',
          }}>
            32개
          </p>
        </div>

        {/* Row 2 */}

        {/* 월 평균 성장률 */}
        <div className="s09-cell" style={cellBase}>
          <p style={labelStyle}>
            신규 환자 유입<br />월 평균 성장률
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
            <p data-target="14" data-suffix="%" style={{
              ...numberStyle, fontSize: '3rem', color: 'var(--color-primary)',
            }}>
              14%
            </p>
            <span style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>↑</span>
          </div>
        </div>

        {/* 연동 플랫폼 */}
        <div className="s09-cell" style={cellBase}>
          <p style={labelStyle}>연동 플랫폼</p>
          <p data-target="7" data-suffix="개" style={{
            ...numberStyle, fontSize: '3rem',
          }}>
            7개
          </p>
        </div>

        {/* 주간 예약 중개 — accent */}
        <div className="s09-cell" style={{
          ...cellBase,
          background: 'var(--color-primary)',
          color: 'white',
        }}>
          <p style={{ ...labelStyle, color: 'rgba(255,255,255,0.7)' }}>
            매주 플랫폼<br />환자 예약 중개
          </p>
          <p data-target="34000" data-suffix="건" style={{
            ...numberStyle, fontSize: '3rem', color: 'white',
          }}>
            34,000건
          </p>
        </div>

        {/* 누적 예약 건 수 */}
        <div className="s09-cell" style={cellBase}>
          <p style={labelStyle}>누적 예약<br />중개 건 수</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.625rem' }}>
            <p data-target="160" data-suffix="만+" style={{
              ...numberStyle, fontSize: '3rem', whiteSpace: 'nowrap',
            }}>
              160만+
            </p>
            <span style={{
              fontSize: '0.6875rem', fontWeight: 700,
              color: 'var(--color-primary)',
              background: 'var(--color-primary-light)',
              padding: '0.2rem 0.625rem',
              borderRadius: '2rem',
              whiteSpace: 'nowrap',
            }}>
              매월 증가 중
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

import { useRef, useState, useEffect, useCallback } from 'react'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const BASE = import.meta.env.BASE_URL

const PLATFORMS = [
  { name: '네이버', logo: `${BASE}images/logos/네이버 로고.png`, size: 'clamp(4rem, 7vh, 9rem)' },
  { name: '카카오', logo: `${BASE}images/logos/카카오 로고.png`, size: 'clamp(3.25rem, 5.5vh, 7rem)' },
  { name: '당근', logo: `${BASE}images/logos/당근 로고.png`, size: 'clamp(3.25rem, 5.5vh, 7rem)' },
  { name: '강남언니', logo: `${BASE}images/logos/강남언니 로고.png`, size: 'clamp(4rem, 7vh, 9rem)' },
  { name: '구글', logo: `${BASE}images/logos/구글 로고.png`, size: 'clamp(3.25rem, 5.5vh, 7rem)' },
  { name: '블라인드', logo: `${BASE}images/logos/블라인드 로고.png`, size: 'clamp(3.25rem, 5.5vh, 7rem)', upcoming: true },
  { name: '키즈노트', logo: `${BASE}images/logos/키즈노트 로고.png`, size: 'clamp(4rem, 7vh, 9rem)', upcoming: true },
]

const LINES_PER_PLATFORM = 6

function buildPaths(logoPositions, hubPos) {
  if (!logoPositions.length || !hubPos) return []

  const paths = []
  logoPositions.forEach((pos, pi) => {
    for (let li = 0; li < LINES_PER_PLATFORM; li++) {
      const spread = 30
      const offsetY = (li - (LINES_PER_PLATFORM - 1) / 2) * (spread / LINES_PER_PLATFORM)
      const startX = pos.x
      const startY = pos.y + offsetY
      const wobble = (li % 2 === 0 ? 1 : -1) * (10 + li * 5)

      const dx = hubPos.x - startX
      const cp1x = startX + dx * 0.25 + li * 8
      const cp1y = startY + wobble
      const cp2x = startX + dx * 0.65 + li * 5
      const cp2y = hubPos.y + (startY - hubPos.y) * 0.15 + (li % 2 === 0 ? 8 : -8)

      const isOrganic = li < LINES_PER_PLATFORM / 2

      paths.push({
        d: `M ${startX},${startY} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${hubPos.x},${hubPos.y}`,
        lineIndex: li,
        type: isOrganic ? 'organic' : 'paid',
      })
    }
  })
  return paths
}

export default function Slide11_DataConvergence() {
  const sectionRef = useRef(null)
  const logoRefs = useRef([])
  const hubRef = useRef(null)
  const [paths, setPaths] = useState([])

  const measureAndBuild = useCallback(() => {
    const section = sectionRef.current
    if (!section) return

    const rect = section.getBoundingClientRect()
    const positions = logoRefs.current.map((el) => {
      if (!el) return null
      const r = el.getBoundingClientRect()
      return {
        x: r.right - rect.left + 10, // right edge of logo + small gap
        y: r.top + r.height / 2 - rect.top, // vertical center
      }
    }).filter(Boolean)

    const hub = hubRef.current
    if (!hub) return
    const hr = hub.getBoundingClientRect()
    const hubPos = {
      x: hr.left + hr.width / 2 - rect.left,
      y: hr.top + hr.height / 2 - rect.top,
    }

    setPaths(buildPaths(positions, hubPos))
  }, [])

  useEffect(() => {
    // Measure multiple times to handle layout shifts
    const timers = [100, 300, 600, 1200].map((ms) =>
      setTimeout(measureAndBuild, ms)
    )

    const handleResize = () => measureAndBuild()
    window.addEventListener('resize', handleResize)

    // Also re-measure when scroll container scrolls (slide becomes visible)
    const scrollContainer = sectionRef.current?.closest('.slide-container')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleResize)
    }

    return () => {
      timers.forEach(clearTimeout)
      window.removeEventListener('resize', handleResize)
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleResize)
      }
    }
  }, [measureAndBuild])

  useSlideAnimation(sectionRef, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    })

    tl.from('.s11-title', { opacity: 0, y: 30, duration: 0.7 })
      .from('.s11-platform', { opacity: 0, x: -20, stagger: 0.05, duration: 0.4 }, '-=0.3')

    // Delay path animation to let measure complete
    tl.add(() => {
      const svgPaths = sectionRef.current?.querySelectorAll('.s11-path')
      if (!svgPaths) return
      svgPaths.forEach((path) => {
        const length = path.getTotalLength()
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.inOut',
          delay: Math.random() * 0.8,
        })
      })
    }, '-=0.3')

    tl.from('.s11-hub', { opacity: 0, scale: 0, duration: 0.6, ease: 'back.out(1.7)' }, '+=0.5')
      .from('.s11-hub-text', { opacity: 0, y: 10, duration: 0.5 }, '-=0.3')
      .from('.s11-legend', { opacity: 0, y: 10, duration: 0.4 }, '-=0.2')
  })

  return (
    <section id="slide-11" ref={sectionRef} className="slide" style={{
      background: 'white',
      position: 'relative', overflow: 'hidden',
    }}>
      <style>{`
        .s11-hub-core {
          animation: s11glow 1.5s ease-in-out infinite;
        }
        @keyframes s11glow {
          0%, 100% { box-shadow: 0 0 30px 8px rgba(47,208,150,0.3); }
          50% { box-shadow: 0 0 50px 16px rgba(47,208,150,0.5); }
        }
        .s11-ripple {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(47,208,150,0.6);
          animation: s11ripple 6s ease-out infinite;
        }
        .s11-ripple:nth-child(2) { animation-delay: 1.5s; }
        .s11-ripple:nth-child(3) { animation-delay: 3s; }
        .s11-ripple:nth-child(4) { animation-delay: 4.5s; }
        @keyframes s11ripple {
          0% { width: 14vh; height: 14vh; opacity: 1; }
          100% { width: 80vh; height: 80vh; opacity: 0; }
        }
      `}</style>

      {/* SVG — same size as section, coordinates match DOM pixels */}
      <svg style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        zIndex: 1, pointerEvents: 'none',
      }}>
        <defs>
          <linearGradient id="lineGradOrganic" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#6366f1" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="lineGradPaid" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#2fd096" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2fd096" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {paths.map((p, i) => (
          <g key={i}>
            <path
              className="s11-path"
              d={p.d}
              fill="none"
              stroke={p.type === 'organic' ? 'url(#lineGradOrganic)' : 'url(#lineGradPaid)'}
              strokeWidth={1.2 + p.lineIndex * 0.2}
            />
            <circle
              r={2 + p.lineIndex * 0.3}
              fill={p.type === 'organic' ? '#6366f1' : '#2fd096'}
              opacity="0.9"
            >
              <animateMotion
                dur={`${2.5 + (i % 7) * 0.4}s`}
                repeatCount="indefinite"
                begin={`${(i * 0.3) % 3}s`}
                path={p.d}
              />
            </circle>
          </g>
        ))}
      </svg>

      <div className="slide-content" style={{ position: 'relative', zIndex: 2 }}>
        {/* Title */}
        <div className="s11-title" style={{
          textAlign: 'center', marginBottom: '1rem',
          position: 'absolute', top: '8%', left: '50%',
          transform: 'translateX(-50%)', width: '100%',
          zIndex: 5,
        }}>
          <p style={{
            fontSize: 'clamp(0.625rem, 1.2vh, 1rem)', fontWeight: 700, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--color-primary)',
            marginBottom: '1rem',
          }}>
            DATA CONVERGENCE
          </p>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vh, 3rem)', fontWeight: 800, color: '#0f172a',
            lineHeight: 1.35, letterSpacing: '-0.02em',
          }}>
            각 플랫폼의 예약과 광고 데이터가 닥톡에 모이면,<br />
            어떤 <span style={{ color: 'var(--color-primary)' }}>'맥락'</span>이 보일까요?
          </h2>
        </div>

        {/* Platform logos */}
        <div style={{
          position: 'absolute', left: '1.5rem', top: 0, bottom: 0,
          display: 'flex', flexDirection: 'column',
          justifyContent: 'center', gap: 'clamp(0.375rem, 1vh, 1.5rem)',
          alignItems: 'flex-end',
          width: 'clamp(4rem, 7vh, 10rem)',
          zIndex: 3,
        }}>
          {PLATFORMS.map((p, i) => (
            <div
              key={p.name}
              className="s11-platform"
              ref={(el) => (logoRefs.current[i] = el)}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}
            >
              <img src={p.logo} alt={p.name} style={{
                width: p.size, height: p.size, objectFit: 'contain',
                ...(p.upcoming ? { filter: 'grayscale(1)', opacity: 0.5 } : {}),
              }} />
            </div>
          ))}
        </div>

        {/* Hub */}
        <div style={{
          position: 'absolute',
          right: '10%', top: '54%',
          transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '1rem', zIndex: 3,
        }}>
          <div style={{
            position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 'clamp(80px, 14vh, 200px)', height: 'clamp(80px, 14vh, 200px)',
          }}>
            <div className="s11-ripple" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
            <div className="s11-ripple" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
            <div className="s11-ripple" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
            <div className="s11-ripple" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />

            <div ref={hubRef} className="s11-hub s11-hub-core" style={{
              width: '100%', height: '100%', borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--color-primary), #1a9d6f)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', zIndex: 2,
            }}>
              <span style={{
                fontSize: 'clamp(0.875rem, 2vh, 1.75rem)', fontWeight: 800, color: 'white',
                letterSpacing: '0.02em',
              }}>
                닥톡
              </span>
            </div>
          </div>

          <div className="s11-hub-text" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 'clamp(1.125rem, 2.2vh, 2rem)', fontWeight: 800, color: '#0f172a' }}>데이터 허브</p>
            <p style={{ fontSize: 'clamp(0.6875rem, 1.3vh, 1.125rem)', color: '#94a3b8', lineHeight: 1.5 }}>
              자연유입 + 광고유입<br />예약 데이터 통합
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="s11-legend" style={{
          position: 'absolute', bottom: '15%', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: '2rem',
          zIndex: 3,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#6366f1',
            }} />
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#6366f1' }}>
              Organic 자연유입 예약
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'var(--color-primary)',
            }} />
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-primary)' }}>
              Paid 광고유입 예약
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const PHASES = [
  {
    num: '01',
    phase: '신규 환자 유입',
    service: '닥톡예약',
    desc: '파편화된 플랫폼 예약을 하나로 통합',
    details: ['멀티 플랫폼 연동', 'EMR 자동 연결', '슬롯 동기화'],
  },
  {
    num: '02',
    phase: '광고 성과 추적',
    service: '닥톡광고',
    desc: '광고 노출부터 내원까지 실시간 추적',
    details: ['풀 사이클 트래킹', '데이터 기반 추천', 'AI 자동심의'],
  },
  {
    num: '03',
    phase: '재진 환자 전환',
    service: '닥톡AI',
    desc: 'AI 환자메세지 + AI 의료상담으로 세심한 케어',
    details: ['개인화 메시지', '24시간 AI 상담', '리텐션 자동화'],
  },
]

// Infinity / figure-8 loop path connecting three circles
const CX = [190, 480, 770] // center X of each circle
const CY = 250 // center Y
const R = 120 // circle radius

export default function Slide17_Wrapup() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })

    tl.from('.s17w-header', { opacity: 0, y: 30, duration: 0.7 })

    // Draw circles
    const circles = ref.current.querySelectorAll('.s17w-circle')
    circles.forEach((c) => {
      const len = c.getTotalLength()
      gsap.set(c, { strokeDasharray: len, strokeDashoffset: len })
    })
    tl.to('.s17w-circle', { strokeDashoffset: 0, stagger: 0.2, duration: 1.2, ease: 'power2.inOut' }, '-=0.3')

    // Draw connecting curves
    const curves = ref.current.querySelectorAll('.s17w-curve')
    curves.forEach((c) => {
      const len = c.getTotalLength()
      gsap.set(c, { strokeDasharray: len, strokeDashoffset: len })
    })
    tl.to('.s17w-curve', { strokeDashoffset: 0, stagger: 0.15, duration: 1, ease: 'power2.inOut' }, '-=1')

    tl.from('.s17w-label', { opacity: 0, scale: 0.8, stagger: 0.15, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.6')
      .from('.s17w-detail', { opacity: 0, y: 10, stagger: 0.05, duration: 0.3 }, '-=0.5')
      .from('.s17w-return', { opacity: 0, duration: 0.6 }, '-=0.3')
      .from('.s17w-bottom', { opacity: 0, y: 20, duration: 0.6 }, '-=0.2')
  })

  return (
    <SlideLayout id="slide-17w" ref={ref}>
      <style>{`
        .s17w-particle {
          animation: s17wFlow 4s linear infinite;
        }
        @keyframes s17wFlow {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .s17w-ripple-ring {
          animation: s17wRipple 4s ease-out infinite;
        }
        @keyframes s17wRipple {
          0% { r: 120; opacity: 0.35; stroke-width: 2; }
          100% { r: 200; opacity: 0; stroke-width: 0.5; }
        }
      `}</style>

      {/* Header */}
      <div className="s17w-header" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <p className="section-label">WRAP UP</p>
        <h2 className="section-title">환자의 전 생애주기를 함께합니다</h2>
      </div>

      {/* SVG diagram */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '860px', margin: '0 auto 1.5rem' }}>
        <svg viewBox="0 0 960 560" style={{ width: '100%', maxWidth: '1100px', height: 'auto' }}>
          <defs>
            <linearGradient id="s17gLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="s17gRight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.15" />
            </linearGradient>
            <filter id="s17glow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Three circles — stronger */}
          {CX.map((cx, i) => (
            <g key={i}>
              {/* Ripple rings */}
              <circle className="s17w-ripple-ring" cx={cx} cy={CY} r={R}
                fill="none" stroke="var(--color-primary)" style={{ animationDelay: `${i * 0.5}s` }} />
              <circle className="s17w-ripple-ring" cx={cx} cy={CY} r={R}
                fill="none" stroke="var(--color-primary)" style={{ animationDelay: `${i * 0.5 + 1.33}s` }} />
              <circle className="s17w-ripple-ring" cx={cx} cy={CY} r={R}
                fill="none" stroke="var(--color-primary)" style={{ animationDelay: `${i * 0.5 + 2.66}s` }} />
              {/* Main circle with glow */}
              <circle cx={cx} cy={CY} r={R}
                fill="var(--color-primary-light)" filter="url(#s17glow)" />
              <circle className="s17w-circle"
                cx={cx} cy={CY} r={R}
                fill="none" stroke="var(--color-primary)" strokeWidth="2.5" opacity="0.4"
              />
            </g>
          ))}

          {/* Connecting curves — top arcs */}
          {[
            { id: 'topL', d: `M ${CX[0]+R*0.7},${CY-R*0.7} C ${CX[0]+160},${CY-180} ${CX[1]-160},${CY-180} ${CX[1]-R*0.7},${CY-R*0.7}` },
            { id: 'topR', d: `M ${CX[1]+R*0.7},${CY-R*0.7} C ${CX[1]+160},${CY-180} ${CX[2]-160},${CY-180} ${CX[2]-R*0.7},${CY-R*0.7}` },
            { id: 'botL', d: `M ${CX[0]+R*0.7},${CY+R*0.7} C ${CX[0]+160},${CY+180} ${CX[1]-160},${CY+180} ${CX[1]-R*0.7},${CY+R*0.7}` },
            { id: 'botR', d: `M ${CX[1]+R*0.7},${CY+R*0.7} C ${CX[1]+160},${CY+180} ${CX[2]-160},${CY+180} ${CX[2]-R*0.7},${CY+R*0.7}` },
            { id: 'fullTop', d: `M ${CX[0]},${CY-R-5} C ${CX[0]+80},${CY-220} ${CX[2]-80},${CY-220} ${CX[2]},${CY-R-5}` },
            { id: 'fullBot', d: `M ${CX[2]},${CY+R+5} C ${CX[2]-80},${CY+220} ${CX[0]+80},${CY+220} ${CX[0]},${CY+R+5}` },
          ].map((curve, i) => (
            <g key={curve.id}>
              <path className="s17w-curve" d={curve.d}
                fill="none" stroke="var(--color-primary)"
                strokeWidth={i >= 4 ? '2.5' : '2.5'}
                strokeDasharray={i >= 4 ? '8 5' : 'none'}
                opacity={i >= 4 ? '0.5' : '0.5'}
              />
              {/* Particles on this path */}
              <circle r="4" fill="#6366f1" opacity="0.8">
                <animateMotion
                  dur={`${3 + i * 0.5}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.6}s`}
                  path={curve.d}
                />
              </circle>
              <circle r="3" fill="#6366f1" opacity="0.6">
                <animateMotion
                  dur={`${3 + i * 0.5}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.6 + 1.5}s`}
                  path={curve.d}
                />
              </circle>
            </g>
          ))}


          {/* Particles on circles */}
          {CX.map((cx, i) => (
            <g key={`p${i}`}>
              <circle r="4" fill="#6366f1" opacity="0.7">
                <animateMotion
                  dur={`${2.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.8}s`}
                  path={`M ${cx},${CY-R} A ${R},${R} 0 1,1 ${cx-0.01},${CY-R}`}
                />
              </circle>
              <circle r="3" fill="#6366f1" opacity="0.5">
                <animateMotion
                  dur={`${2.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.8 + 1.2}s`}
                  path={`M ${cx},${CY-R} A ${R},${R} 0 1,1 ${cx-0.01},${CY-R}`}
                />
              </circle>
            </g>
          ))}

          {/* Phase labels inside circles */}
          {PHASES.map((item, i) => (
            <g key={item.service} className="s17w-label">
              {/* Service name */}
              <text x={CX[i]} y={CY-8} textAnchor="middle" fontSize="26" fontWeight="900" fill="var(--color-primary)">
                {item.service}
              </text>

              {/* Phase */}
              <text x={CX[i]} y={CY+24} textAnchor="middle" fontSize="16" fontWeight="700" fill="#0f172a">
                {item.phase}
              </text>
            </g>
          ))}

        </svg>
      </div>

      {/* Bottom message */}
      <div className="s17w-bottom" style={{
        textAlign: 'center', maxWidth: '720px', margin: '0 auto',
      }}>
        <p style={{
          fontSize: '1rem', fontWeight: 600, color: '#64748b', lineHeight: 1.8,
        }}>
          <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>닥톡예약</span>으로 신규 환자를 유입하고,{' '}
          <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>닥톡광고</span>로 성과를 추적하며,{' '}
          <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>닥톡AI</span>로 세심하게 케어하여
          진성 환자로 전환하는 선순환 구조를 빠르게 고도화하고 있습니다.
        </p>
      </div>
    </SlideLayout>
  )
}

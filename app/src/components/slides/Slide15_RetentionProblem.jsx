import { useRef } from 'react'
import { UserMultiple, Time, TaskComplete } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const painPoints = [
  {
    icon: <Time size={28} />,
    title: '늦은 시간까지 대상 선별',
    desc: '진료 후 늦은 시간까지 스태프가 대상 선별',
    color: '#f59e0b',
    bg: '#fffbeb',
    border: '#fde68a',
  },
  {
    icon: <TaskComplete size={28} />,
    title: '수동 문자 작성',
    desc: '문자 내용 수동 작성에 많은 공수',
    color: '#ef4444',
    bg: '#fef2f2',
    border: '#fecaca',
  },
  {
    icon: <UserMultiple size={28} />,
    title: '반복되는 안내 업무',
    desc: '예약 안내, 검사 후 안내사항 등 반복 업무',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    border: '#ddd6fe',
  },
]

export default function Slide15_RetentionProblem() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s15-label', { opacity: 0, y: 30, duration: 0.5 })
      .from('.s15-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')
      .from('.s15-subtitle', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')

    // Cards fade in one by one
    tl.from('.s15-card-0', { opacity: 0, y: 40, duration: 0.6 }, '+=0.2')
      .from('.s15-card-1', { opacity: 0, y: 40, duration: 0.6 }, '-=0.3')
      .from('.s15-card-2', { opacity: 0, y: 40, duration: 0.6 }, '-=0.3')

    tl.from('.s15-transition', { opacity: 0, y: 20, duration: 0.6 }, '+=0.2')
  })

  return (
    <SlideLayout id="slide-15" ref={ref}>
      <p className="section-label s15-label">RETENTION</p>
      <h2 className="section-title s15-title">리텐션, 놓치고 있는 성장 동력</h2>
      <p className="section-subtitle s15-subtitle">
        신규 환자를 데려오는 것만큼 중요한 '재진 환자' 전환
      </p>

      {/* Pain-point cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {painPoints.map((item, i) => (
          <div
            key={i}
            className={`s15-card-${i}`}
            style={{
              padding: '2rem 1.5rem',
              background: item.bg,
              borderRadius: '1.25rem',
              border: `1px solid ${item.border}`,
              textAlign: 'center',
            }}
          >
            <div style={{
              width: '3.5rem',
              height: '3.5rem',
              borderRadius: '1rem',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: item.color,
              margin: '0 auto 1.25rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            }}>
              {item.icon}
            </div>
            <p style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: '#1e293b' }}>
              {item.title}
            </p>
            <p style={{ fontSize: '0.9375rem', color: '#475569', lineHeight: 1.6 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Transition message */}
      <div
        className="s15-transition"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          padding: '1.25rem 2rem',
          background: 'var(--color-primary-light)',
          borderRadius: '0.75rem',
          border: '1px solid var(--color-primary)',
        }}
      >
        <p style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-primary-dark)', textAlign: 'center' }}>
          이 공수를 획기적으로 줄이는 방법이 있습니다
        </p>
      </div>
    </SlideLayout>
  )
}

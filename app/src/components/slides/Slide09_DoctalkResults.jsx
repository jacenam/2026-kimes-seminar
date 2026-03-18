import { useRef } from 'react'
import { Growth, Hospital, Partnership } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const stats = [
  { value: '25,000+', label: 'EMR 고객사 네트워크', icon: Partnership },
  { value: '4,500+', label: '닥톡예약 사용 병·의원', icon: Hospital },
  { value: '32개', label: '연동 전자차트사', icon: Growth },
]

export default function Slide09_DoctalkResults() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s09-label', { opacity: 0, y: 30, duration: 0.5 })
      .from('.s09-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')

    // Count-up animation for stat numbers
    const numberEls = ref.current.querySelectorAll('.s09-number')
    const targets = [25000, 4500, 32]
    const suffixes = ['+', '+', '개']

    numberEls.forEach((el, i) => {
      const obj = { val: 0 }
      tl.from(el.closest('.stat-card'), { opacity: 0, y: 40, duration: 0.5 }, i === 0 ? '-=0.1' : '-=0.3')
      tl.to(obj, {
        val: targets[i],
        duration: 1.2,
        ease: 'power1.out',
        onUpdate() {
          const formatted = Math.round(obj.val).toLocaleString()
          el.textContent = formatted + suffixes[i]
        },
      }, '<')
    })

    tl.from('.s09-banner', { opacity: 0, y: 60, duration: 0.7, ease: 'power2.out' }, '-=0.3')
  })

  return (
    <SlideLayout id="slide-09" ref={ref}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p className="section-label s09-label">RESULTS</p>
        <h2 className="section-title s09-title" style={{ marginBottom: '2.5rem' }}>닥톡예약의 성과</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          marginBottom: '2.5rem',
        }}>
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.label} className="stat-card" style={{ padding: '2.5rem 2rem' }}>
                <Icon size={28} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
                <p className="stat-card__number s09-number" style={{ color: 'var(--color-primary)' }}>
                  {s.value}
                </p>
                <p className="stat-card__label">{s.label}</p>
              </div>
            )
          })}
        </div>

        <div
          className="s09-banner"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '1.5rem 2rem',
            background: 'var(--color-primary)',
            borderRadius: '1rem',
            color: '#ffffff',
          }}
        >
          <Growth size={28} />
          <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            신규 환자 유입 월 평균 <span style={{ fontSize: '1.5rem' }}>14%</span> 성장
          </p>
          <span style={{ fontSize: '1.5rem' }}>↑</span>
        </div>
      </div>
    </SlideLayout>
  )
}

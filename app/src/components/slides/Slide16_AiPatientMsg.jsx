import { useRef } from 'react'
import { Chat, Security, ArrowRight } from '@carbon/icons-react'
import SlideLayout from '../common/SlideLayout'
import useSlideAnimation from '../../hooks/useSlideAnimation'

const retentionData = [
  {
    num: 1,
    title: 'AI 맞춤 메시지 자동 생성',
    desc: '비식별 진료·처방 데이터 기반',
  },
  {
    num: 2,
    title: '24시간 AI 비서 상담',
    desc: '메시지 링크 통해 의료상담 가능',
  },
  {
    num: 3,
    title: '독립적 데이터 관리',
    desc: '각 병원만의 AI, Privacy 보장',
  },
]

const chatMessages = [
  { type: 'ai', text: '김닥톡님, 오늘 임플란트 수술 고생 많으셨습니다.' },
  { type: 'ai', text: '마취가 풀리면 통증이 있을 수 있으니, 처방해 드린 약을 꼭 챙겨주세요.' },
  { type: 'user', text: '네, 술은 언제부터 마실 수 있나요?' },
  { type: 'ai', text: '술은 상처 치유를 늦추고 염증을 유발할 수 있어, 최소 2주간은 피해주시는 것이 가장 좋습니다!' },
]

export default function Slide16_AiPatientMsg() {
  const ref = useRef(null)

  useSlideAnimation(ref, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    })

    tl.from('.s16-label', { opacity: 0, y: 30, duration: 0.5 })
      .from('.s16-title', { opacity: 0, y: 30, duration: 0.6 }, '-=0.2')
      .from('.s16-slogan', { opacity: 0, y: 20, duration: 0.6 }, '-=0.2')

    // Retention steps slide in from left
    const steps = ref.current.querySelectorAll('.s16-ret-step')
    steps.forEach((step, i) => {
      tl.from(step, {
        opacity: 0,
        x: -40,
        duration: 0.5,
        ease: 'power2.out',
      }, i === 0 ? '+=0.1' : '-=0.25')
    })

    tl.from('.s16-privacy', { opacity: 0, y: 20, duration: 0.5 }, '-=0.1')

    // Phone mockup rises
    tl.from('.s16-phone', {
      opacity: 0,
      y: 80,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=1.2')

    // Chat bubbles appear sequentially
    const bubbles = ref.current.querySelectorAll('.s16-bubble')
    bubbles.forEach((bubble, i) => {
      tl.from(bubble, {
        opacity: 0,
        y: 15,
        duration: 0.35,
      }, i === 0 ? '-=0.2' : '-=0.1')
    })
  })

  return (
    <SlideLayout id="slide-16" ref={ref}>
      <p className="section-label s16-label">AI CARE</p>
      <h2 className="section-title s16-title">
        <Chat size={36} style={{ verticalAlign: 'middle', marginRight: '0.75rem', color: 'var(--color-primary)' }} />
        닥톡AI 환자메세지
      </h2>
      <p
        className="s16-slogan"
        style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          color: 'var(--color-primary)',
          marginBottom: '2rem',
        }}
      >
        나를 기억해 주는 세심한 주치의
      </p>

      {/* Two column layout */}
      <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
        {/* Left column */}
        <div style={{ flex: 1 }}>
          <div className="retention-steps">
            {retentionData.map((item, i) => (
              <div key={i} className="retention-step s16-ret-step">
                <div className="retention-step__num">{item.num}</div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    {item.desc}
                  </p>
                </div>
                <ArrowRight size={16} style={{ marginLeft: 'auto', color: '#94a3b8', flexShrink: 0 }} />
              </div>
            ))}
          </div>

          {/* Privacy badge */}
          <div
            className="s16-privacy"
            style={{
              marginTop: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 1.25rem',
              background: 'var(--color-bg-dark)',
              borderRadius: '0.75rem',
            }}
          >
            <Security size={20} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
            <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
              특정 원장님의 진료 데이터는 다른 의사의 AI 학습에 활용되지 않습니다
            </p>
          </div>
        </div>

        {/* Right column - Phone mockup */}
        <div className="s16-phone" style={{ flexShrink: 0 }}>
          <div className="phone-mockup">
            <div className="phone-mockup__header">
              <div style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                background: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Chat size={14} style={{ color: 'white' }} />
              </div>
              <div>
                <p style={{ fontSize: '0.8125rem', fontWeight: 700 }}>닥프렌즈 치과의원</p>
                <p style={{ fontSize: '0.6875rem', color: '#64748b' }}>AI 상담 비서 연결됨</p>
              </div>
            </div>

            <div className="phone-mockup__body">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`chat-bubble chat-bubble--${msg.type} s16-bubble`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="phone-mockup__input">
              <div style={{
                flex: 1,
                padding: '0.5rem 0.75rem',
                background: '#f1f5f9',
                borderRadius: '1rem',
                fontSize: '0.75rem',
                color: '#94a3b8',
              }}>
                메시지를 입력하세요...
              </div>
              <div style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                background: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <ArrowRight size={14} style={{ color: 'white' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

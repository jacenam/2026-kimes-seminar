export default function ScrollIndicator({ totalSlides = 7, activeSlide = 0, onDotClick }) {
  return (
    <nav className="scroll-indicator" aria-label="Slide navigation">
      {Array.from({ length: totalSlides }, (_, i) => (
        <button
          key={i}
          className={`scroll-indicator__dot ${activeSlide === i ? 'scroll-indicator__dot--active' : ''}`}
          onClick={() => onDotClick?.(i)}
          aria-label={`Slide ${i + 1}`}
          aria-current={activeSlide === i ? 'step' : undefined}
        />
      ))}
    </nav>
  )
}

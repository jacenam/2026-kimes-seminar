import { useRef } from 'react'
import useScrollSnap from './hooks/useScrollSnap'
import ScrollIndicator from './components/common/ScrollIndicator'

import Slide01_Title from './components/slides/Slide01_Title'
import Slide02_MarketEnv from './components/slides/Slide02_MarketEnv'
import Slide02b_AdChannels from './components/slides/Slide02b_AdChannels'
import Slide03_MarketSize from './components/slides/Slide03_MarketSize'
import Slide04_AdPainPoint from './components/slides/Slide04_AdPainPoint'
import Slide05_DataSilo from './components/slides/Slide05_DataSilo'
import Slide06_DoctalkIntro from './components/slides/Slide06_DoctalkIntro'
import Slide07_PlatformExpansion from './components/slides/Slide07_PlatformExpansion'
import Slide08_EmrIntegration from './components/slides/Slide08_EmrIntegration'
import Slide08b_UnifiedManagement from './components/slides/Slide08b_UnifiedManagement'
import Slide09_DoctalkResults from './components/slides/Slide09_DoctalkResults'
import Slide10_TrackingOverview from './components/slides/Slide10_TrackingOverview'
import Slide11_EmrTracking from './components/slides/Slide11_EmrTracking'
import Slide11b_BookingDataFlow from './components/slides/Slide11b_BookingDataFlow'
import Slide12_DataInsights from './components/slides/Slide12_DataInsights'
import Slide13_AdReviewProblem from './components/slides/Slide13_AdReviewProblem'
import Slide14_AiReviewSolution from './components/slides/Slide14_AiReviewSolution'
import Slide14b_KmaPartnership from './components/slides/Slide14b_KmaPartnership'
import Slide15_RetentionProblem from './components/slides/Slide15_RetentionProblem'
import Slide16_AiPatientMsg from './components/slides/Slide16_AiPatientMsg'
import Slide16b_AiConsultation from './components/slides/Slide16b_AiConsultation'
import Slide17_Wrapup from './components/slides/Slide17_Wrapup'
import Slide17_OutroVision from './components/slides/Slide17_OutroVision'

function App() {
  const containerRef = useRef(null)
  const { activeSlide, scrollToSlide } = useScrollSnap(containerRef, 23)

  return (
    <div ref={containerRef} className="slide-container">
      <ScrollIndicator
        totalSlides={23}
        activeSlide={activeSlide}
        onDotClick={scrollToSlide}
      />
      <Slide01_Title />
      <Slide02_MarketEnv />
      <Slide02b_AdChannels />
      <Slide03_MarketSize />
      <Slide04_AdPainPoint />
      <Slide05_DataSilo />
      <Slide06_DoctalkIntro />
      <Slide07_PlatformExpansion />
      <Slide08b_UnifiedManagement />
      <Slide08_EmrIntegration />
      <Slide09_DoctalkResults />
      <Slide10_TrackingOverview />
      <Slide11_EmrTracking />
      <Slide11b_BookingDataFlow />
      <Slide12_DataInsights />
      <Slide13_AdReviewProblem />
      <Slide14_AiReviewSolution />
      <Slide14b_KmaPartnership />
      <Slide15_RetentionProblem />
      <Slide16_AiPatientMsg />
      <Slide16b_AiConsultation />
      <Slide17_Wrapup />
      <Slide17_OutroVision />
    </div>
  )
}

export default App

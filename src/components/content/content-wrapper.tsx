import { useData } from '@/provider/data.provider'
import Photo from './photo'
import SwipeWrapper from './swipe-wrapper'
import Welcome from './welcome'

export const MAX_STEP = 3
const ContentWrapper = () => {
  const { step } = useData()
  return (
    <div
      data-step={step}
      className="background-glass flex  flex-1 items-center justify-center overflow-hidden rounded-t-3xl transition-all duration-500 data-[step=0]:rounded-t-full"
    >
      <div data-prevent="true" className="flex size-full">
        <SwipeWrapper isEnter={step == 0} step={0}>
          <Welcome />
        </SwipeWrapper>

        <SwipeWrapper isEnter={step == 1} step={1}>
          <Photo />
        </SwipeWrapper>
      </div>
    </div>
  )
}

export default ContentWrapper

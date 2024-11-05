import { useData } from '@/provider/data.provider'
import Photo from './photo'
import SwipeWrapper from './swipe-wrapper'
import Welcome from './welcome'

export const MAX_STEP = 3
export const SWIPE_CONTAINER = 'swipe-container'
const ContentWrapper = () => {
  const { step } = useData()
  return (
    <div
      data-step={step}
      className="background-glass flex flex-1 items-center justify-center overflow-hidden rounded-t-3xl transition-all duration-500 data-[step=0]:rounded-t-full"
    >
      <div
        id={SWIPE_CONTAINER}
        data-prevent="true"
        className="flex size-full snap-x snap-mandatory flex-nowrap  overflow-x-hidden overflow-y-hidden data-[prevent=false]:overflow-x-auto"
      >
        <SwipeWrapper>
          <Welcome />
        </SwipeWrapper>

        <SwipeWrapper>
          <Photo />
        </SwipeWrapper>
      </div>
    </div>
  )
}

export default ContentWrapper

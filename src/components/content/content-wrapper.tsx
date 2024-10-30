import SwipeWrapper from './swipe-wrapper'
import Welcome from './welcome'

export const MAX_STEP = 3
export const SWIPE_CONTAINER = 'swipe-container'
const ContentWrapper = () => {
  return (
    <div className="background-glass flex flex-1 items-center justify-center overflow-hidden rounded-t-full">
      <div
        id={SWIPE_CONTAINER}
        data-prevent="false"
        className="flex size-full snap-x snap-mandatory  flex-nowrap overflow-x-auto overflow-y-hidden"
      >
        {[...Array(MAX_STEP)].map((_, i) => (
          <SwipeWrapper key={i} step={i}>
            <Welcome step={i} />
          </SwipeWrapper>
        ))}
      </div>
    </div>
  )
}

export default ContentWrapper

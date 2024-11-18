import { useData } from '@/provider/data.provider'
import Photo from './photo'
import SwipeWrapper from './swipe-wrapper'
import Welcome from './welcome'
import Game from './game'
import Invitations from './invitations'

export const MAX_STEP = 5
const ContentWrapper = () => {
  const { step } = useData()

  return (
    <div
      data-step={step}
      className={` ${
        step < MAX_STEP - 1 ? 'background-glass' : ''
      } flex  flex-1 items-center justify-center overflow-hidden rounded-t-3xl transition-all duration-500 data-[step=0]:rounded-t-full`}
    >
      <div data-prevent="true" className="flex size-full">
        <SwipeWrapper isEnter={step == 0} step={0}>
          <Welcome />
        </SwipeWrapper>

        <SwipeWrapper isEnter={step == 1} step={1}>
          <Photo isOpen={step == 1} />
        </SwipeWrapper>

        <SwipeWrapper isEnter={step == 2} step={2}>
          <Game />
        </SwipeWrapper>

        <SwipeWrapper isEnter={step == 3} step={3}>
          <Photo isOpen={step == 3} isReview />
        </SwipeWrapper>

        <SwipeWrapper isEnter={step == 4} step={4}>
          <Invitations />
        </SwipeWrapper>
      </div>
    </div>
  )
}

export default ContentWrapper

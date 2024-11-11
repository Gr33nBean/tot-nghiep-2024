import { useData } from '@/provider/data.provider'
import WelcomeControl from './welcome-control'
import PhotoControl from './photo-control'
import GameControl from './game-control'
import { AnimatePresence, motion } from 'framer-motion'
import { MAX_STEP } from '../content/content-wrapper'

const Control = () => {
  const { step } = useData()

  return (
    <div
      data-step={step}
      className={` ${
        step == MAX_STEP - 1 ? '' : 'border-top-animate'
      } background-glass group relative flex w-full items-center justify-center overflow-hidden rounded-b-3xl py-10`}
    >
      <div className="pointer-events-none h-[60px]"></div>
      <ZoomWrapper isEnter={step == 0}>
        <WelcomeControl />
      </ZoomWrapper>

      <ZoomWrapper isEnter={step == 1}>
        <PhotoControl />
      </ZoomWrapper>

      <ZoomWrapper isEnter={step == 2}>
        <GameControl />
      </ZoomWrapper>

      <ZoomWrapper isEnter={step == 3}>
        <PhotoControl />
        {/* <RevieweControl /> */}
      </ZoomWrapper>
    </div>
  )
}

export default Control

function ZoomWrapper({ isEnter, children }: { isEnter: boolean; children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      {isEnter && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="absolute inset-0 flex origin-center items-center justify-center"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

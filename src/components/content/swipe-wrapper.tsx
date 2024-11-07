import { useData } from '@/provider/data.provider'
import { AnimatePresence, motion } from 'framer-motion'

const SwipeWrapper = ({ children, isEnter, step }: { children: React.ReactNode; isEnter: boolean; step: number }) => {
  const { step: currentStep } = useData()

  return (
    <AnimatePresence mode="wait">
      {isEnter && (
        <motion.div
          initial={{ x: step < currentStep ? '-100%' : '100%' }}
          animate={{ x: 0 }}
          exit={{ x: step < currentStep ? '100%' : '-100%' }}
          className="relative size-full overflow-y-auto overflow-x-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SwipeWrapper

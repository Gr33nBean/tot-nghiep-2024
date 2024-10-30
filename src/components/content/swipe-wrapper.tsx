import { useData } from '@/provider/data.provider'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

const SwipeWrapper = ({ children, step }: { children: React.ReactNode; step: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)
  const { handleSetStep, step: stepState } = useData()
  useEffect(() => {
    if (isInView && step !== stepState) {
      handleSetStep(step)
    }
  }, [isInView])
  return (
    <div className="relative size-full min-w-full snap-center snap-always">
      <div ref={ref} className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="relative size-full overflow-y-auto overflow-x-hidden">{children}</div>
    </div>
  )
}

export default SwipeWrapper

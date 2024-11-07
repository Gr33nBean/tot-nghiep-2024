import { useData } from '@/provider/data.provider'
import WelcomeControl from './welcome-control'
import RevieweControl from './reviewe-control'
import PhotoControl from './photo-control'

const className = 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 scale-0'

const Control = () => {
  const { step } = useData()

  return (
    <div
      data-step={step}
      className="border-top-animate background-glass group relative flex w-full items-center justify-center overflow-hidden rounded-b-3xl py-10"
    >
      <div className="pointer-events-none h-[60px]"></div>
      <div className={`${className} p-4 group-data-[step=0]:scale-100`}>
        <WelcomeControl />
      </div>

      <div className={`w-full group-data-[step=1]:scale-100 ${className}`}>
        <PhotoControl />
      </div>

      <div className={` group-data-[step=2]:scale-100 ${className}`}>
        <RevieweControl />
      </div>
    </div>
  )
}

export default Control

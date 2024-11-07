import { ISkipPrevious, ISkipNext } from '@/constants/icons'
import { PlayButton } from './play-button'
import { useData } from '@/provider/data.provider'

const RevieweControl = () => {
  const { handleStepChange } = useData()

  return (
    <div className="flex items-center gap-4">
      <button className="scale-100 transition-all duration-300 active:scale-75" onClick={() => handleStepChange(false)}>
        <ISkipPrevious />
      </button>
      <PlayButton />
      <button className="scale-100 transition-all duration-300 active:scale-75" onClick={() => handleStepChange(true)}>
        <ISkipNext />
      </button>
    </div>
  )
}

export default RevieweControl

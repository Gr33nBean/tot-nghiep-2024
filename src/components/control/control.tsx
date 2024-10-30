import { ISkipNext, ISkipPrevious } from '@/constants/icons'
import { PlayButton } from './play-button'
import { useData } from '@/provider/data.provider'

const Control = () => {
  const { handleStepChange } = useData()

  return (
    <div className="border-top-animate background-glass flex w-full items-center justify-center rounded-b-3xl py-10">
      <div className="flex w-fit items-center gap-4">
        <button
          className="scale-100 transition-all duration-300 active:scale-75"
          onClick={() => handleStepChange(false)}
        >
          <ISkipPrevious />
        </button>
        <PlayButton />
        <button
          className="scale-100 transition-all duration-300 active:scale-75"
          onClick={() => handleStepChange(true)}
        >
          <ISkipNext />
        </button>
      </div>
    </div>
  )
}

export default Control

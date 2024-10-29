import { ISkipNext, ISkipPrevious } from '@/constants/icons'
import { PlayButton } from './play-button'

const Control = () => {
  return (
    <div className="border-top-animate flex w-full items-center justify-center py-10">
      <div className="flex w-fit items-center gap-4">
        <button className="scale-100 transition-all duration-300 active:scale-75">
          <ISkipPrevious />
        </button>
        <PlayButton />
        <button className="scale-100 transition-all duration-300 active:scale-75">
          <ISkipNext />
        </button>
      </div>
    </div>
  )
}

export default Control

import { IUserHeart } from '@/constants/icons'

const Photo = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-4 p-8">
      <div className="w-[60%] translate-x-3.5 drop-shadow-2xl [--heart-color:theme(colors.error.base)]">
        <IUserHeart />
      </div>
    </div>
  )
}

export default Photo

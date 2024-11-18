import { IGalleryWide, ICameraRotate } from '@/constants/icons'
import Button1 from '../button/button-1'
import EditButton from './edit-button'
import { useData } from '@/provider/data.provider'
import { getTheme, setPhoto } from '@/utils/local-storage'

const PhotoControl = () => {
  const { isPhoto, setIsPhoto, handleStepChange, step, name } = useData()

  return (
    <div data-again={!!isPhoto} className="group flex w-full items-center justify-between gap-4 px-10">
      <button
        className="scale-150 transition-all duration-300 active:scale-75"
        onClick={() => {
          const image = document.querySelector('img[data-photo]') as HTMLImageElement
          if (image) {
            image.classList.remove('-scale-x-100')
          }
          if (isPhoto) {
            const reTake = document.getElementById('retake-photo') as HTMLButtonElement
            if (reTake) reTake.click()
          } else {
            const input = document.createElement('input')
            input.type = 'file'
            input.accept = 'image/*'
            input.click()
            input.onchange = (e) => {
              const target = e.target as HTMLInputElement
              const file = target.files?.[0]
              if (!file) {
                return
              }
              const reader = new FileReader()
              reader.readAsDataURL(file)
              reader.onload = () => {
                const base64 = reader.result as string
                setIsPhoto(base64)
              }
            }
          }
        }}
      >
        <span className="block group-data-[again=true]:hidden">
          <IGalleryWide />
        </span>
        <span className="block group-data-[again=false]:hidden">
          <ICameraRotate />
        </span>
      </button>
      <Button1
        play={!!isPhoto}
        children1={
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.2222 21H9.77778C6.65675 21 5.09624 21 3.97524 20.2646C3.48995 19.9462 3.07328 19.5371 2.74902 19.0607C2 17.9601 2 16.4279 2 13.3636C2 10.2994 2 8.76721 2.74902 7.6666C3.07328 7.19014 3.48995 6.78104 3.97524 6.46268C4.69555 5.99013 5.59733 5.82123 6.978 5.76086C7.63685 5.76086 8.20412 5.27068 8.33333 4.63636C8.52715 3.68489 9.37805 3 10.3663 3H13.6337C14.6219 3 15.4728 3.68489 15.6667 4.63636C15.7959 5.27068 16.3631 5.76086 17.022 5.76086C18.4027 5.82123 19.3044 5.99013 20.0248 6.46268C20.51 6.78104 20.9267 7.19014 21.251 7.6666C22 8.76721 22 10.2994 22 13.3636C22 16.4279 22 17.9601 21.251 19.0607C20.9267 19.5371 20.51 19.9462 20.0248 20.2646C18.9038 21 17.3433 21 14.2222 21ZM7.8335 13.3634C7.8335 11.104 9.69898 9.27246 12.0002 9.27246C14.3013 9.27246 16.1668 11.104 16.1668 13.3634C16.1668 15.6227 14.3013 17.4543 12.0002 17.4543C9.69898 17.4543 7.8335 15.6227 7.8335 13.3634ZM9.50016 13.3634C9.50016 12.0078 10.6195 10.9088 12.0002 10.9088C13.3809 10.9088 14.5002 12.0078 14.5002 13.3634C14.5002 14.719 13.3809 15.8179 12.0002 15.8179C10.6195 15.8179 9.50016 14.719 9.50016 13.3634ZM16.7224 10.0906C16.7224 9.63877 17.0955 9.27246 17.5557 9.27246H18.6668C19.1271 9.27246 19.5002 9.63877 19.5002 10.0906C19.5002 10.5425 19.1271 10.9088 18.6668 10.9088H17.5557C17.0955 10.9088 16.7224 10.5425 16.7224 10.0906Z"
              fill="currentColor"
            />
          </>
        }
        children2={
          <path
            d="M9.77 16.5567C9.50333 16.5567 9.25 16.45 9.06333 16.2633L5.29 12.49C4.90333 12.1033 4.90333 11.4633 5.29 11.0767C5.67667 10.69 6.31667 10.69 6.70333 11.0767L9.77 14.1433L16.6233 7.29C17.01 6.90333 17.65 6.90333 18.0367 7.29C18.4233 7.67667 18.4233 8.31667 18.0367 8.70333L10.4767 16.2633C10.29 16.45 10.0367 16.5567 9.77 16.5567Z"
            fill="currentColor"
          />
        }
        onClick={async (_) => {
          if (!isPhoto) {
            const take = document.getElementById('take-photo') as HTMLButtonElement
            const image = document.querySelector('img[data-photo]') as HTMLImageElement
            if (image) {
              image.classList.add('-scale-x-100')
            }
            if (take) take.click()
          } else {
            if (name) {
              if (step == 3) {
                const postData = {
                  name: name,
                  type: isPhoto.split(';')[0].split(':')[1],
                  data: isPhoto.split(',')[1],
                  user: getTheme(),
                }
                try {
                  const response = await fetch(
                    'https://script.google.com/macros/s/AKfycbxJHc2wcSN_X8Mu7UTLxc4b7ApQ5L17QgFZgA_NuToPXs3OmlCb1RyaCJOe4ZeP8egGGw/exec',
                    {
                      method: 'POST',
                      body: JSON.stringify(postData),
                    }
                  )
                  const data = await response.json()
                  setPhoto(data)
                  handleStepChange(true)
                } catch (error) {
                  alert('Vui lòng thử lại')
                  setIsPhoto(undefined)
                }
              } else {
                handleStepChange(true)
              }
            } else {
              alert('Điền tên giúp dùm cái đi!')
            }
          }
        }}
      />
      <EditButton isDisable={!isPhoto} />
    </div>
  )
}

export default PhotoControl

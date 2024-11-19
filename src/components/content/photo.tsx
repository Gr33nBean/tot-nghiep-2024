import { IUserHeart } from '@/constants/icons'
import { useData } from '@/provider/data.provider'
import { getPermissionCamera } from '@/utils/common'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Camera } from 'react-camera-pro'
import { createPortal } from 'react-dom'

const Photo = ({ isOpen, isReview }: { isReview?: boolean; isOpen: boolean }) => {
  const [isAcceptCamera, setIsAcceptCamera] = useState<boolean | undefined>(isReview)
  const [isOpenPrompt, setIsOpenPrompt] = useState(false)
  const { name, setName } = useData()

  return (
    <div className="flex size-full flex-col items-center justify-center gap-4">
      {isOpen && isAcceptCamera && <TakePhoto />}
      {isOpen && !isReview && (
        <Prompt
          isAcceptCamera={isAcceptCamera}
          setIsAcceptCamera={setIsAcceptCamera}
          isOpenPrompt={isOpenPrompt}
          setIsOpenPrompt={setIsOpenPrompt}
        />
      )}

      <div data-review={isReview ?? false} className="absolute inset-0 z-20 data-[review=false]:hidden">
        <p className="absolute left-0 right-0 top-0 bg-gradient-to-r from-white/0 via-white/60  to-white/0  p-4 text-center font-playball text-xl text-text">
          Bạn muốn thay đổi gì hông?
        </p>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-white/0 via-white/60 to-white/0 px-40 max-sm:px-4">
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            placeholder="What should I call you?"
            className="w-full bg-transparent py-4 text-center font-playball text-[1.3rem] text-text outline-none placeholder:text-text/70"
          />
        </div>
      </div>
      <div className="hidden w-[60%] translate-x-3.5 drop-shadow-2xl [--heart-color:theme(colors.error.base)]">
        <IUserHeart />
      </div>
    </div>
  )
}

export default Photo

function TakePhoto() {
  const { filter, setIsPhoto, isPhoto } = useData()
  const camera = useRef(null)
  useEffect(() => {
    const el = document.getElementById('face-center')
    if (el) {
      const parent = el.parentElement
      if (parent) {
        if (parent.offsetHeight > parent.offsetWidth) {
          el.classList.add('w-full')
        } else {
          el.classList.add('h-full')
        }
      }
    }
  }, [])
  return (
    <>
      <div data-photo={!!isPhoto} className="size-full data-[photo=true]:hidden">
        <Camera facingMode="user" ref={camera} errorMessages={{}} />
        <div className="absolute inset-0 z-[10] flex items-center justify-center">
          <div id="face-center" className="aspect-square p-4 opacity-50">
            <div className="size-full animate-pulse rounded-full border border-gray"></div>
          </div>
        </div>
      </div>

      <img
        data-photo={!!isPhoto}
        src={isPhoto}
        alt=""
        className="w-full bg-white object-cover data-[photo=false]:hidden"
        style={{
          filter: `brightness(${filter.brightness}%) contrast(${filter.contrast}%) saturate(${filter.saturation}%)`,
        }}
      />

      <button
        id="take-photo"
        className="pointer-events-none absolute bottom-10 left-1/2 z-30 hidden -translate-x-1/2"
        onClick={() => {
          setIsPhoto((camera.current as any)?.takePhoto())
        }}
      >
        Take photo
      </button>

      <button
        id="retake-photo"
        className="pointer-events-none absolute bottom-10 left-1/2 z-30 hidden -translate-x-1/2"
        onClick={() => {
          setIsPhoto(undefined)
        }}
      >
        Take photo
      </button>
    </>
  )
}

function Prompt({
  isOpenPrompt,
  isAcceptCamera,
  setIsAcceptCamera,
  setIsOpenPrompt,
}: {
  isOpenPrompt: boolean | undefined
  isAcceptCamera: boolean | undefined
  setIsOpenPrompt: React.Dispatch<React.SetStateAction<boolean>>
  setIsAcceptCamera: React.Dispatch<React.SetStateAction<boolean | undefined>>
}) {
  const handleClick = () => {
    if (isAcceptCamera) {
      setIsOpenPrompt(false)
    } else {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(() => {
          setIsAcceptCamera(true)
          setIsOpenPrompt(false)
        })
        .catch((_) => {
          alert('Dạ kiếm thiết bị có Cam rùi dô lại giúp em!')
        })
    }
  }

  useEffect(() => {
    async function init() {
      const res = await getPermissionCamera()
      setIsAcceptCamera(res)
      setIsOpenPrompt(true)
    }
    init()
  }, [])

  return createPortal(
    <AnimatePresence>
      {isOpenPrompt && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="absolute inset-0 z-50 flex items-center justify-center rounded-3xl p-8 backdrop-blur"
        >
          <div className="rounded-2xl bg-white p-4">
            <p className="w-full text-center text-lg">Can I get a photo of you!😘</p>
            <div className="mt-2.5 flex w-full items-center justify-center gap-2.5 font-abril-fatface text-sm">
              <button onClick={handleClick} className="flex-1 rounded-xl border border-text px-3 py-1 text-text">
                Accept
              </button>
              <button onClick={handleClick} className="flex-1 rounded-xl bg-secondary px-3 py-1 text-white">
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('layout') ?? document.body
  )
}

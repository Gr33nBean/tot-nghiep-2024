import { IUserHeart } from '@/constants/icons'
import { useData } from '@/provider/data.provider'
import { getPermissionCamera } from '@/utils/common'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Camera } from 'react-camera-pro'
import { createPortal } from 'react-dom'

const Photo = () => {
  const { step } = useData()
  const [isAcceptCamera, setIsAcceptCamera] = useState<boolean | undefined>(undefined)
  const [isOpenPrompt, setIsOpenPrompt] = useState(false)

  return (
    <div className="flex size-full flex-col items-center justify-center gap-4">
      {step == 1 && isAcceptCamera && <TakePhoto />}
      {step == 1 && (
        <Prompt
          isAcceptCamera={isAcceptCamera}
          setIsAcceptCamera={setIsAcceptCamera}
          isOpenPrompt={isOpenPrompt}
          setIsOpenPrompt={setIsOpenPrompt}
        />
      )}
      <div className="hidden w-[60%] translate-x-3.5 drop-shadow-2xl [--heart-color:theme(colors.error.base)]">
        <IUserHeart />
      </div>
    </div>
  )
}

export default Photo

function TakePhoto() {
  const { filter, setIsPhoto } = useData()
  const camera = useRef(null)
  const [image, setImage] = useState(undefined)

  return (
    <>
      <Camera ref={camera} errorMessages={{}} />
      {image && (
        <img
          src={image}
          alt=""
          className="h-auto w-full -scale-x-100 object-cover"
          style={{
            filter: `brightness(${filter.brightness}%) contrast(${filter.contrast}%) saturate(${filter.saturation}%)`,
          }}
        />
      )}

      <button
        id="take-photo"
        className="pointer-events-none absolute bottom-10 left-1/2 z-30 hidden -translate-x-1/2"
        onClick={() => {
          setImage((camera.current as any)?.takePhoto())
          setIsPhoto(true)
        }}
      >
        Take photo
      </button>

      <button
        id="retake-photo"
        className="pointer-events-none absolute bottom-10 left-1/2 z-30 hidden -translate-x-1/2"
        onClick={() => {
          setImage(undefined)
          setIsPhoto(false)
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

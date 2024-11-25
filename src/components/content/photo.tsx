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
        <p className="absolute left-0 right-0 top-0 bg-gradient-to-r from-white/0 via-white/60 to-white/0 p-4  text-center  text-xl font-medium text-text">
          Bạn muốn thay đổi gì hông?
        </p>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-white/0 via-white/60 to-white/0 px-4">
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            placeholder="Bạn tên gì á?"
            className="w-full bg-transparent py-4 text-center font-chonburi text-[1.5rem] tracking-[-0.03em] text-text outline-none placeholder:text-text/70"
          />
        </div>
      </div>
    </div>
  )
}

export default Photo

function TakePhoto() {
  const { filter, setIsPhoto, isPhoto } = useData()
  const camera = useRef(null)
  useEffect(() => {
    const time = setTimeout(() => {
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
    }, 100)

    return () => clearTimeout(time)
  }, [])
  return (
    <>
      <div data-photo={!!isPhoto} data-loading={false} className="group relative size-full data-[photo=true]:hidden">
        <Camera facingMode="user" ref={camera} errorMessages={{}} />
        <div className="absolute inset-0 z-[10] flex items-center justify-center">
          <div id="face-center" className="aspect-square p-4 opacity-50">
            <div className="size-full animate-pulse rounded-full border border-gray"></div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-white/80 group-data-[loading=false]:hidden">
          <div className="size-10 animate-spin rounded-full border-y border-secondary"></div>
        </div>
      </div>

      <img
        data-photo={!!isPhoto}
        src={isPhoto}
        data-flip={filter.flip}
        alt=""
        className="size-full bg-white object-cover data-[photo=false]:hidden data-[flip=true]:-scale-x-100"
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
      ></button>

      <button
        id="retake-photo"
        className="pointer-events-none absolute bottom-10 left-1/2 z-30 hidden -translate-x-1/2"
        onClick={() => {
          setIsPhoto(undefined)
        }}
      ></button>
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
            <p className="w-full text-center font-chonburi text-lg tracking-[-0.03em]">Xin tấm hình nhen!😘</p>
            <div className="mt-2.5 flex w-full items-center justify-center gap-2.5 font-chonburi text-sm">
              <button onClick={handleClick} className="flex-1 rounded-xl border border-text px-3 py-1 text-text">
                Đồng ý
              </button>
              <button onClick={handleClick} className="flex-1 rounded-xl bg-secondary px-3 py-1 text-white">
                Đồng ý
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('layout') ?? document.body
  )
}

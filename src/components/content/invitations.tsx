import { I2024Vertical, IDownload, IGGMap, IInvitationTitle, IReload } from '@/constants/icons'
import { IPositionShort } from '@/constants/icons/text'
import { useData } from '@/provider/data.provider'
import { resetLocalStorage } from '@/utils/local-storage'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import swipeUp from '../../../public/swipe-up.json'

const Invitations = () => {
  const { isPhoto, name } = useData()
  const owner = window.location.pathname.split('/')[1]
  const container = useRef<HTMLDivElement>(null)
  const [showGuide, setShowGuide] = useState(false)
  useEffect(() => {
    if (container.current) {
      if (container.current.offsetHeight < container.current.scrollHeight) {
        setShowGuide(true)
      }
    }
  }, [container])

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center p-ios-pb">
      <div className=" background-glass flex h-full max-h-full w-full max-w-[calc(475px-2rem)] flex-col overflow-hidden rounded-3xl">
        <div
          ref={container}
          onScroll={(e) => {
            if (e.currentTarget.scrollTop > 5 && showGuide) {
              setShowGuide(false)
            }
          }}
          className="relative flex w-full flex-1 flex-col gap-4 overflow-auto p-4"
        >
          <div className="background-glass w-full rounded-xl p-2 px-4">
            <IInvitationTitle />
          </div>

          <div className="flex w-full items-stretch gap-4">
            <div className="flex flex-1 items-center gap-4">
              <div className="background-glass h-full flex-1 rounded-xl p-2">
                <div className="relative size-full overflow-hidden rounded-[0.5rem]">
                  <img src={'/huy.jpg'} className="absolute inset-0 size-full object-cover" alt="" />
                </div>
              </div>
            </div>
            <div className="background-glass invitation-text w-fit max-w-[40%] rounded-xl p-2.5 max-sm:max-w-[50%] ">
              Thời gian thắm thoát thoi đưa! Em {owner} thân quý mời anh/chị{' '}
              <span className=" relative inline text-primary underline">
                <span className="absolute inset-0  rounded-full bg-white blur-md"></span>
                <span className="relative">{name}</span>
              </span>{' '}
              đến chung vui, chụp hình trong buổi lễ tốt nghiệp của em. Sự có mặt của anh/chị là niềm vinh hạnh của em.
            </div>
          </div>

          <div className="flex w-full items-stretch gap-4">
            <div className="background-glass h-full min-w-[42px] rounded-xl p-2.5 ">
              <I2024Vertical />
            </div>
            <div className="background-glass aspect-square h-full rounded-2xl p-2">
              <div className="relative size-full overflow-hidden rounded-[0.5rem]">
                <img src={isPhoto} className="absolute inset-0 size-full object-cover" alt="" />
              </div>
            </div>
            <div className="background-glass flex-1 rounded-xl p-2.5 ">
              <div className="flex h-full w-full max-w-full flex-col items-center justify-center font-abril-fatface text-3xl max-sm:text-xl">
                <p>16:30</p>
                <p>28/11</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-1 items-stretch gap-4 ">
            <div className="flex h-full flex-col gap-4">
              <div className="background-glass relative rounded-2xl p-4 ">
                <div className="absolute inset-0 bg-white blur-xl"></div>
                <div className="relative flex h-full flex-col items-start justify-center">
                  <IPositionShort />
                </div>
              </div>

              <a
                href="tel:0343214971"
                className="background-glass flex w-full flex-1 items-center justify-center rounded-2xl px-4 !text-inherit "
              >
                <span className="text-lg">
                  Ét ô ét: <span className="ml-1 underline">034 321 4971</span>
                </span>
              </a>
            </div>

            <div className="flex min-w-[16%] flex-1 flex-col gap-4">
              <motion.div
                initial={{ rotate: '0deg' }}
                animate={{ rotate: ['0deg', '-3deg', '3deg', '0deg'] }}
                transition={{ duration: 1, repeat: Infinity, delay: 3, ease: 'linear' }}
                className="background-glass flex w-full flex-1 origin-top items-center justify-center rounded-2xl p-4"
                onClick={() => {
                  const a = document.createElement('a')
                  a.href = 'https://maps.app.goo.gl/1HNG17HcejveizAn9'
                  a.target = '_blank'
                  a.click()
                }}
              >
                <IGGMap />
              </motion.div>

              <div
                className="background-glass w-full cursor-pointer rounded-2xl p-4"
                onClick={async () => {
                  // const element = document.body
                  // if (!element) {
                  //   return
                  // }
                  // const canvas = await html2canvas(element)
                  // const data = canvas.toDataURL('image/jpg')
                  // const link = document.createElement('a')
                  // link.href = data
                  // link.download = 'tot-nghiep-2024.png'
                  // document.body.appendChild(link)
                  // link.click()
                  // document.body.removeChild(link)
                }}
              >
                <IDownload />
              </div>
              <div
                className="background-glass w-full cursor-pointer rounded-2xl p-4"
                onClick={() => {
                  resetLocalStorage()
                  window.location.reload()
                }}
              >
                <IReload />
              </div>
            </div>
          </div>

          {showGuide && <Lottie className="absolute bottom-0 left-0 right-0" animationData={swipeUp} loop={true} />}
        </div>
      </div>
    </div>,
    (document.getElementById('layout') as HTMLElement) ?? document.body
  )
}

export default Invitations

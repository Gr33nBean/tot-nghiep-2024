import { I2024Vertical, IGGMap, IPhone, IReload, IWarning } from '@/constants/icons'
import { useData } from '@/provider/data.provider'
import { getTheme, Images, Names, resetLocalStorage, Tels, TTheme } from '@/utils/local-storage'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import swipeUp from '../../../public/swipe-up.json'

const Invitations = () => {
  const { isPhoto, name, filter } = useData()
  const theme = getTheme() ?? 'huy'
  const owner = Names[theme as TTheme]
  const ownerImage = Images[theme as TTheme]

  const tel = Tels[window.location.pathname.split('/')[1] as TTheme]
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
    <div id={'invitations'} className="fixed inset-0 flex items-center justify-center p-ios-pb">
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
          <div className="background-glass flex w-full flex-col items-center justify-center rounded-xl px-4 py-3">
            <p className="font-chonburi text-lg uppercase tracking-tight">Thư mời tốt nghiệp</p>
            <p className="text-base font-medium italic">Mời bạn đến chung vui</p>
          </div>

          <div className="flex w-full items-stretch gap-4">
            <div className="flex flex-1 items-center gap-4">
              <div className="background-glass h-full flex-1 rounded-xl p-2">
                <div className="relative size-full overflow-hidden rounded-[0.5rem]">
                  <img src={ownerImage} className="absolute inset-0 size-full object-cover" alt="" />
                </div>
              </div>
            </div>
            <div className="background-glass invitation-text w-fit max-w-[50%] rounded-xl p-2.5 font-semibold italic ">
              <span className="font-bold text-primary underline">{' ' + owner + ' '}</span>
              thân quý mời anh/chị/bạn{' '}
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
                <img
                  src={isPhoto}
                  className="absolute inset-0 size-full -scale-x-100 object-cover"
                  alt=""
                  style={{
                    filter: `brightness(${filter.brightness}%) contrast(${filter.contrast}%) saturate(${filter.saturation}%)`,
                  }}
                />
              </div>
            </div>
            <div className="background-glass flex-1 rounded-xl p-2.5 ">
              <div className="flex h-full w-full max-w-full flex-col items-center justify-center font-chonburi  text-xl">
                <p>16:30</p>
                <p>28/11</p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-1 items-stretch gap-4 ">
            <div className="flex h-full flex-col gap-4">
              <div className="background-glass relative rounded-2xl p-4 ">
                <div className="absolute inset-0 bg-white blur-xl"></div>
                <div className="relative flex h-full flex-col items-start justify-center gap-2">
                  <p className="font-chonburi text-lg leading-6 tracking-tighter ">
                    Trường Đại Học Công Nghệ Thông Tin, ĐHQG HCM
                  </p>
                  <div className="flex w-full items-start pl-0.5 pt-0.5">
                    <p className="h-[90%] w-[2px] bg-text/80"></p>
                    <p className=" pl-2 text-sm font-medium italic leading-4">
                      Đường Hàn Thuyên, Phường Linh Trung, Thủ Đức, Hồ Chí Minh
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={`tel:${tel}`}
                className="background-glass flex w-full flex-1 items-center justify-center rounded-2xl px-4 py-2 !text-inherit "
              >
                <span className=" flex items-center gap-1 font-chonburi text-lg italic underline">
                  <IPhone />
                  {tel.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}
                </span>
              </a>
            </div>

            <div className="flex min-w-[16%] flex-1 flex-col gap-4">
              <motion.div
                initial={{ rotate: '0deg' }}
                animate={{ rotate: ['0deg', '-3deg', '3deg', '0deg'] }}
                transition={{ duration: 1, repeat: Infinity, delay: 3, ease: 'linear' }}
                className="background-glass flex w-full flex-1 origin-top cursor-pointer items-center justify-center rounded-2xl p-4"
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
                className="background-glass relative hidden w-full cursor-pointer  overflow-hidden rounded-2xl p-4"
                onClick={async () => {}}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 3, ease: 'linear' }}
                  className=" absolute inset-0  bg-primary blur-xl"
                ></motion.div>
                <div className="relative">
                  <IWarning />
                </div>
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

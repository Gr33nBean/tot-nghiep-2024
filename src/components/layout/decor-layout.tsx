import { I2024, IGraduation, IHat } from '@/constants/icons'
import Baloons from '../decor/baloons'
import { Outlet } from 'react-router-dom'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { getPhoto, getTheme, Images, TTheme } from '@/utils/local-storage'
import swipeUp from '../../../public/swipe-up.json'
import Lottie from 'lottie-react'
import UseHeadPhone from './use-head-phone'
import Music, { ClickSound } from './music'

const DecorLayout = () => {
  const imgSrc = Images[(getTheme() ?? 'huy') as TTheme]
  const photo = getPhoto()
  const ref = useRef<HTMLDivElement>(null)
  const child = useRef<HTMLDivElement>(null)
  const [isHideAnimate, setIsHideAnimate] = useState<undefined | boolean>(undefined)
  const { scrollYProgress } = useScroll({
    container: ref,
  })
  const reverseScroll = useTransform(scrollYProgress, (value) => {
    const res = 1 - value * 2
    if (res < 0) {
      return 0
    } else {
      return res
    }
  })
  const scroll1 = useTransform(scrollYProgress, (value) => {
    const res = value * 2

    if (res >= 1) {
      return 1
    } else {
      return res
    }
  })
  const scroll2 = useTransform(scrollYProgress, (value) => {
    const res = (value - 0.5) * 2
    if (res < 0) {
      return 0
    } else {
      return res
    }
  })
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.08 && isHideAnimate == undefined) {
      setIsHideAnimate(false)
    }
    if (latest > 0.95) {
      if (ref.current && !isHideAnimate) {
        ref.current.scrollTo({ top: ref.current.scrollHeight, behavior: 'smooth' })
        setTimeout(() => {
          setIsHideAnimate(true)
        }, 100)
      }
    }
    const el = document.getElementById('animation-progress')
    if (el) {
      el.style.opacity = String(latest * 2)
    }
  })

  useEffect(() => {
    if (photo && child.current) {
      child.current.classList.add('max-h-0')
    }

    const addSoundClick = () => {
      ClickSound()
    }
    document.addEventListener('click', addSoundClick)
    return () => document.removeEventListener('click', addSoundClick)
  }, [])

  return (
    <div className="relative size-full">
      <div
        className="fixed right-0 top-0 -translate-y-[40%] translate-x-[24%] text-secondary"
        style={{
          width: 'calc(max(34dvw, 34dvh))',
          maxWidth: '70dvw',
        }}
      >
        <motion.div className="origin-top-right" style={{ scale: scroll1 }}>
          <IHat />
        </motion.div>
      </div>
      <div
        className=" fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary"
        style={{
          width: 'calc(min(30dvw, 30dvh))',
        }}
      >
        <motion.div className="origin-center" style={{ scale: scroll1 }}>
          <I2024 />
        </motion.div>
      </div>
      <div
        className="fixed -bottom-0.5 -left-0.5 text-secondary"
        style={{
          width: 'calc(max(24dvw, 24dvh))',
          maxWidth: '70dvw',
        }}
      >
        <motion.div className="origin-bottom-left" style={{ scale: scroll1 }}>
          <IGraduation />
        </motion.div>
      </div>

      <motion.div
        // initial={{ scale: 0 }}
        // animate={{ scale: 1 }}
        // transition={{ duration: 0.8, delay: 1, ease: 'anticipate' }}
        style={{ scale: photo ? 1 : scroll2 }}
        className="relastive size-full origin-bottom"
      >
        <Outlet />
      </motion.div>
      <div
        hidden={isHideAnimate}
        className="absolute left-1/2 top-1/2 aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2 max-sm:w-full"
      >
        <motion.div
          className="relative size-full origin-center overflow-hidden rounded-full"
          style={{ scale: reverseScroll }}
        >
          <motion.img
            layoutId={'image-animation'}
            className="relative size-full origin-center object-cover"
            src={imgSrc}
          />

          <p
            id="animation-progress"
            className="background-glass absolute inset-0 flex size-full items-center justify-center text-2xl text-text opacity-0 transition-all duration-75"
          ></p>

          {isHideAnimate == undefined && <Lottie className="absolute inset-0" animationData={swipeUp} loop={true} />}
        </motion.div>
      </div>
      <div
        ref={ref}
        hidden={isHideAnimate}
        style={{ scrollBehavior: 'smooth' }}
        className="absolute inset-0 size-full overflow-auto"
      >
        <div ref={child} className="h-[180%] w-full"></div>
      </div>
      {!photo && <UseHeadPhone />}
      <Music />
      <Baloons scrollYProgress={scrollYProgress} />
    </div>
  )
}

export default DecorLayout

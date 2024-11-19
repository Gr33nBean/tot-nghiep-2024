import { getTheme, Images, setTheme, Themes, TTheme } from '@/utils/local-storage'
import { motion } from 'framer-motion'
import { Outlet, useNavigate } from 'react-router-dom'

// const Octagon= [30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%]
const Octagon = [
  { x: 30, y: 0 },
  { x: 70, y: 0 },
  { x: 100, y: 30 },
  { x: 100, y: 70 },
  { x: 70, y: 100 },
  { x: 30, y: 100 },
  { x: 0, y: 70 },
  { x: 0, y: 30 },
]

const ThemeLayout = () => {
  const pathname = window.location.pathname
  const navigate = useNavigate()

  if (pathname !== '/') {
    const theme = pathname.split('/')[1]
    if (theme && Themes.find((t) => t === theme)) {
      setTheme(theme as TTheme)
      return (
        <>
          <Outlet />
        </>
      )
    }
  } else {
    const theme = getTheme()
    if (theme && Themes.find((t) => t === theme)) {
      window.location.href = `/${theme}`
    }
    document.body.className = '!bg-white'
  }
  return (
    <div className="relative flex size-full flex-col items-center justify-center gap-2  p-4 text-black">
      <div className="absolute left-1/2 top-1/2 aspect-square w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  max-sm:w-[80%]">
        <div className="absolute inset-0 rounded-full border-2 border-black "></div>
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          Chọn người bạn quen :3
        </p>

        <motion.div
          initial={{ rotate: `0deg` }}
          animate={{ rotate: [`0deg`, `360deg`] }}
          transition={{ duration: Themes.length * 2, ease: 'linear', repeat: Infinity }}
          className="absolute inset-0 origin-center "
        >
          {Themes.map((theme, index, arr) => {
            return (
              <motion.div
                key={index}
                initial={{ left: `${Octagon[index].x}%`, top: `${Octagon[index].y}%` }}
                transition={{ duration: arr.length * 2, ease: 'linear', repeat: Infinity }}
                className=" absolute aspect-square w-[30%]  -translate-x-1/2 -translate-y-1/2  "
              >
                <motion.div
                  key={index}
                  initial={{ rotate: `0deg` }}
                  animate={{ rotate: [`0deg`, `-360deg`] }}
                  transition={{ duration: arr.length * 2, ease: 'linear', repeat: Infinity }}
                  className="background-glass absolute flex size-full origin-center -translate-x-1/2 -translate-y-1/2  cursor-pointer items-center justify-center rounded-lg border border-gray  p-2 "
                  onClick={() => {
                    navigate(`/${theme}`)
                  }}
                >
                  <motion.img
                    layoutId={'image-animation'}
                    className="pointer-events-none size-full rounded-[0.25rem] object-cover"
                    src={Images[theme]}
                  />
                  <p className="pointer-events-none absolute inset-0 flex items-center justify-center text-white">
                    {theme}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default ThemeLayout

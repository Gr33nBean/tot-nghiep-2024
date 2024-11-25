import { IMapArrowDown, INote2, IVinylRecordOutline } from '@/constants/icons'
import { generateRandomArray } from '@/utils/common'
import { motion } from 'framer-motion'

const Welcome = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center pt-28 text-center ">
      <div className="w-full px-8">
        <p className="w-full truncate text-center font-chonburi text-[2rem] uppercase">Lễ tốt nghiệp</p>
        <p className="mt-1 w-full -translate-y-2 truncate text-center  text-[1.3rem] font-medium italic ">
          Mùa Đông
          <span className="inline-block origin-left -translate-y-[2px] scale-125 pl-1">2024</span>
        </p>
      </div>

      <div className=" relative flex w-full flex-1 items-center">
        <div className="relative w-full py-2">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/80 to-white/20 "></div>

          <div data-first={true} className="px-30 group relative w-full px-4">
            <input
              id="name"
              type="text"
              autoComplete="off"
              placeholder="Bạn tên gì á?"
              onFocus={(e) => {
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.dataset.first = 'false'
                }
              }}
              className="w-full bg-transparent py-4 text-center font-chonburi text-[1.5rem] tracking-[-0.03em] text-text outline-none placeholder:text-text/70"
            />
            <motion.div
              initial={{ y: '-100%', x: '-50%' }}
              animate={{ y: ['-100%', '-90%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="absolute left-1/2 top-0 -translate-y-full scale-150 font-chonburi text-primary group-data-[first=false]:hidden"
            >
              <span>
                <IMapArrowDown />
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative flex h-[30%] w-full items-center justify-center rounded-full">
        {new Array(8).fill(0).map((_, index) => (
          <AnimateNote2 key={index} index={index + 1} />
        ))}
        <span className="absolute inset-y-6 aspect-square rounded-full bg-gradient-to-r from-white/0 via-primary/80 to-white/0 blur-xl"></span>
        <div className="aspect-square h-[50%] transition-all duration-300 active:scale-75">
          <motion.div
            initial={{ rotate: '0deg' }}
            animate={{ rotate: ['0deg', '360deg'] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
            className="relative h-full text-secondary "
          >
            <IVinylRecordOutline />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Welcome

function AnimateNote2({ index }: { index: number }) {
  const goals = [
    {
      left: 0,
      top: -10,
    },
    {
      left: 100,
      top: -10,
    },
    {
      left: 100,
      top: 90,
    },
    {
      left: 0,
      top: 90,
    },
  ]

  const goal = goals[index % goals.length]

  return (
    <motion.div
      initial={{ opacity: 0, left: '50%', x: '-50%', top: '50%', y: '-50%' }}
      animate={{
        left: [...generateRandomArray(50, goal.left)].map((item) => `${item}%`),
        top: [...generateRandomArray(50, goal.top)].map((item) => `${item}%`),
        opacity: [0, 0, 1, 1, 1, 1, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        delay: index,
        repeatDelay: index,
        ease: 'easeOut',
      }}
      className="absolute text-primary"
    >
      <INote2 />
    </motion.div>
  )
}

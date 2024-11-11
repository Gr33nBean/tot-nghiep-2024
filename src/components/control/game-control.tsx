import { useData } from '@/provider/data.provider'
import { motion } from 'framer-motion'

const GameControl = () => {
  const { gameStep } = useData()
  return (
    <div className="relative size-full max-w-full">
      <div className="absolute left-1/2 top-1/2 flex h-full w-[80%] -translate-x-1/2 -translate-y-1/2 flex-row-reverse items-center ">
        <Progress number={5} active={gameStep >= 5} />
        <Progress number={4} active={gameStep >= 4} />
        <Progress number={3} active={gameStep >= 3} />
        <Progress number={2} active={gameStep >= 2} />
        <Progress number={1} active={gameStep >= 1} />
        <div
          data-active={gameStep >= 0}
          className="relative flex aspect-square h-[20%] items-center justify-center rounded-full border border-gray bg-gray data-[active=true]:border-primary data-[active=true]:bg-primary max-sm:h-[15%]"
        >
          <div className="size-[50%] rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default GameControl

function Progress({ number, active }: { number: number; active?: boolean }) {
  return (
    <div data-active={active} className="group flex h-[20%] w-full items-center max-sm:h-[15%]">
      <div className="h-[20%] flex-1 scale-[110%] border-y border-gray bg-white ">
        {active && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 origin-left bg-primary"
          ></motion.div>
        )}
      </div>
      <div className="relative flex aspect-square h-full items-center justify-center overflow-hidden rounded-full border border-gray bg-white font-abril-fatface text-sm text-white group-data-[active=true]:border-primary">
        {active && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="absolute -inset-1 origin-left rounded-full bg-primary"
          ></motion.div>
        )}
        <p className="relative">{number}</p>
      </div>
    </div>
  )
}

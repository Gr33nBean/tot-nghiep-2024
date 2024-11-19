import { Decors, getTheme, TTheme } from '@/utils/local-storage'
import Baloon from './baloon'
import { MotionValue } from 'framer-motion'

const Baloons = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const theme = (getTheme() ?? 'huy') as TTheme
  const decors = Decors[theme]
  return (
    <div className="pointer-events-none fixed inset-0 origin-center overflow-hidden">
      <Baloon
        scrollYProgress={scrollYProgress}
        className="left-0 w-[min(18dvw,_18dvh)] -translate-x-[30%]"
        src={`/decor/${decors[0]}`}
        duration={18}
      />
      <Baloon
        scrollYProgress={scrollYProgress}
        className="right-[20%] w-[min(15dvw,_15dvh)]"
        src={`/decor/${decors[0]}`}
        duration={12}
      />
      <Baloon
        scrollYProgress={scrollYProgress}
        className="left-[30%] w-[min(14dvw,_14dvh)]"
        src={`/decor/${decors[1]}`}
        duration={16}
      />
      <Baloon
        scrollYProgress={scrollYProgress}
        className="right-0 w-[min(20dvw,_20dvh)] translate-x-[30%]"
        src={`/decor/${decors[1]}`}
        duration={14}
      />
    </div>
  )
}

export default Baloons

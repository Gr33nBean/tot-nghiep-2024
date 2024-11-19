import { motion, MotionValue } from 'framer-motion'

const Baloon = ({
  className,
  src,
  duration,
  scrollYProgress,
}: {
  className?: string
  src?: string
  duration?: number
  scrollYProgress: MotionValue<number>
}) => {
  return (
    <motion.div
      initial={{ bottom: `-30%` }}
      animate={{ bottom: '100%' }}
      transition={{ repeat: Infinity, duration: duration || 6, ease: 'easeIn' }}
      className={`absolute ${className}`}
    >
      <motion.div style={{ scale: scrollYProgress }}>
        <img className="w-full object-contain" src={src} />
      </motion.div>
    </motion.div>
  )
}

export default Baloon

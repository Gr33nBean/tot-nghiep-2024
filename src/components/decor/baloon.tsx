import { motion } from 'framer-motion'

const Baloon = ({ className, src, duration }: { className?: string; src?: string; duration?: number }) => {
  return (
    <motion.div
      initial={{ bottom: '-30%' }}
      animate={{ bottom: '100%' }}
      transition={{ repeat: Infinity, duration: duration || 6, ease: 'easeIn' }}
      className={`absolute ${className}`}
      // style={{
      //   filter: 'drop-shadow(0 16px 12px rgba(0, 0, 0, 0.5))',
      // }}
    >
      <div className="size-10"></div>
      <img className="w-full object-contain" src={src} />
    </motion.div>
  )
}

export default Baloon

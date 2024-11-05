import { IContrast, IGalleryEdit, ISaturation, ISun } from '@/constants/icons'
import { motion } from 'framer-motion'
import { useState } from 'react'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'

const EditButton = () => {
  const [isEdit, setIsEdit] = useState(false)

  return (
    <>
      <button onClick={() => setIsEdit(!isEdit)} className="scale-150 transition-all duration-300 active:scale-75">
        <IGalleryEdit />
      </button>
      {isEdit && <EditModal />}
    </>
  )
}

export default EditButton

function EditModal() {
  const [data, setData] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
  })
  const [active, setActive] = useState(0)
  console.log(data)

  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute -inset-y-10 inset-x-0 bg-white"
    >
      <div className=" group flex size-full flex-col items-center justify-center gap-2">
        <p className="font-abril-fatface text-sm">Exposure</p>
        <div className="w-full ">
          <Slider
            min={0}
            max={200}
            classNames={{ track: 'bg-transparent', handle: 'bg-secondary border-secondary' }}
            value={data.brightness}
            onChange={(value) => setData({ ...data, brightness: value as number })}
          />
        </div>
        <div className="flex w-full items-center gap-1">
          {[ISun, IContrast, ISaturation].map((Icon, index) => {
            const isActive = index === active
            return (
              <button
                data-active={isActive}
                key={index}
                className=" rounded-full border border-gray p-2 transition-all duration-300 data-[active=true]:border-primary data-[active=true]:text-primary"
                onClick={() => {
                  setActive(index)
                }}
              >
                {Icon()}
              </button>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

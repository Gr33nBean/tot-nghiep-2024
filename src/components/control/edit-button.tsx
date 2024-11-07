import { ICheck, IContrast, IGalleryEdit, IRestart, ISaturation, ISun } from '@/constants/icons'
import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'
import { useData } from '@/provider/data.provider'

const EditButton = ({ isDisable }: { isDisable: boolean }) => {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <>
      <button
        disabled={isDisable}
        onClick={() => setIsEdit((p) => !p)}
        className="scale-150 transition-all duration-300 active:scale-75 disabled:pointer-events-none disabled:opacity-70"
      >
        <span className="pointer-events-none">
          <IGalleryEdit />
        </span>
      </button>
      <AnimatePresence>{isEdit && <EditModal handleClose={() => setIsEdit(false)} />}</AnimatePresence>
    </>
  )
}

export default EditButton

function EditModal({ handleClose }: { handleClose: () => void }) {
  const { filter, setFilter } = useData()
  const oldFilter = useMemo(() => filter, [])
  const [active, setActive] = useState(0)

  return (
    <motion.div
      initial={{ y: '105%' }}
      animate={{ y: 0 }}
      exit={{ y: '105%' }}
      transition={{ duration: 0.2 }}
      className="absolute -inset-y-12 inset-x-0 bg-white"
    >
      <div data-active={active} className=" group flex size-full flex-col items-center justify-center gap-3 px-4 ">
        <p className="font-abril-fatface text-sm">{['Brightness', 'Contrast', 'Saturation'][active]}</p>
        {new Array(3).fill(0).map((_, index) => {
          return (
            <div data-active={index === active} key={index} className=" hidden w-full data-[active=true]:!block">
              <Slider
                min={0}
                max={200}
                classNames={{ track: 'bg-transparent', handle: 'bg-primary !border-secondary !shadow-none' }}
                value={index == 0 ? filter.brightness : index == 1 ? filter.contrast : filter.saturation}
                onChange={(value) =>
                  setFilter({
                    ...filter,
                    [index == 0 ? 'brightness' : index == 1 ? 'contrast' : 'saturation']: value,
                  })
                }
              />
            </div>
          )
        })}
        <div className="flex w-full items-center  gap-2">
          <button
            className=" scale-75 rounded-xl border border-secondary bg-secondary p-2 text-white transition-all duration-300 active:scale-50"
            onClick={() => {
              setFilter(oldFilter)
            }}
          >
            <span className="block -scale-x-100">
              <IRestart />
            </span>
          </button>
          <div className="flex flex-1 items-center justify-center gap-2">
            {[ISun, IContrast, ISaturation].map((Icon, index) => {
              return (
                <button
                  data-active={index === active}
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

          <button
            className="  scale-75 rounded-xl border-secondary bg-secondary p-2 text-white transition-all duration-300 active:scale-50"
            onClick={handleClose}
          >
            <ICheck />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

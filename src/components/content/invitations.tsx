import { useData } from '@/provider/data.provider'
import { createPortal } from 'react-dom'

const Invitations = () => {
  const { isPhoto } = useData()
  return createPortal(
    <div className=" absolute inset-0 rounded-3xl">
      <div className="relative flex size-full flex-col p-4">
        <div className="w-full">
          <p className="w-full truncate text-center font-abril-fatface text-[3rem] uppercase max-sm:text-[2rem]">
            Graduation
          </p>
          <p className="mt-1 w-full -translate-y-2 truncate text-center text-[1.7rem] max-sm:text-[1.35rem] ">
            Class of 2024
          </p>
        </div>

        <div className=" flex w-full flex-1 items-stretch overflow-auto">
          {[0, 1].map((_, index) => (
            <div key={index} className="relative flex flex-1 flex-col  last:flex-col-reverse">
              <img
                data-index={index}
                src={index == 0 ? '/huy.jpg' : isPhoto}
                className="h-[50%] w-full overflow-hidden object-cover data-[index=0]:rounded-t-[1rem] data-[index=1]:rounded-b-[1rem] data-[index=0]:rounded-bl-[1rem] data-[index=1]:rounded-tr-[1rem]"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 top-0 flex p-4 font-abril-fatface text-[3rem]">
        2
        <br />
        0
        <br />
        2
        <br />4
      </div> */}
    </div>,
    (document.getElementById('layout') as HTMLElement) ?? document.body
  )
}

export default Invitations

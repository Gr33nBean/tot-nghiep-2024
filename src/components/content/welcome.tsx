import { removeVietnameseAccent } from '@/utils/common'

const Welcome = ({ step }: { step: number }) => {
  return (
    <div
      data-step={step}
      className="flex size-full flex-col items-center justify-center pb-8 pt-28 text-center max-sm:pb-12 max-sm:pt-32"
    >
      <div className="w-full px-8">
        <p className="w-full truncate text-center font-abril-fatface text-[3rem] uppercase max-sm:text-[2rem]">
          Graduation
        </p>
        <p className="mt-1 w-full -translate-y-2 truncate text-center text-[1.85rem] max-sm:text-[1.5rem] ">
          Class of 2024
        </p>
      </div>

      <div className=" relative mb-10 flex w-full flex-1 items-center">
        <div className="relative w-full bg-gradient-to-r from-white/0 via-white/40  to-white/0 py-2 ">
          <div
            data-check={false}
            className=" absolute -bottom-2 left-1/2 max-h-0 min-w-fit -translate-x-1/2 translate-y-full overflow-hidden transition-all duration-300 data-[check=true]:max-h-[200px] data-[check=true]:overflow-visible"
          >
            <p className="background-glass rounded-full px-4 py-1 text-[1.25rem] font-bold text-error-base">
              Đừng giỡn nữa! Điền dô liền!
            </p>
          </div>
          <div className="relative w-full px-40 max-sm:px-8">
            <input
              type="text"
              placeholder="What should I call you?"
              onChange={(e) => {
                e.target.value = removeVietnameseAccent(e.target.value)
              }}
              className="w-full bg-transparent py-4 text-center font-abril-fatface text-[1.75rem] text-text outline-none placeholder:text-text/80"
            />
          </div>
        </div>
      </div>

      <p className="rounded-full bg-primary px-6 py-1 font-abril-fatface text-[1.5rem]">You are invited</p>
    </div>
  )
}

export default Welcome

{
  /* <p className=" w-full text-center font-abril-fatface text-[1.65rem] max-sm:text-[1.5rem]">
            Bachelor of <br />
            Software Engineering
          </p>
          <p className="mt-4 w-full text-center text-[1.5rem] max-sm:text-[1.35rem]">
            Thursday, November
            <span className="text-[1.75rem] max-sm:text-[1.15rem]"> 28th | 8:00 AM</span>
          </p>
          <p className="mt-1 w-full text-center text-[1.5rem] max-sm:text-[1.35rem]">UIT University, Building A</p> */
}

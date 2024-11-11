const Welcome = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center pb-8 pt-28 text-center max-sm:pb-12 max-sm:pt-32">
      <div className="w-full px-8">
        <p className="w-full truncate text-center font-abril-fatface text-[3rem] uppercase max-sm:text-[2rem]">
          Graduation
        </p>
        <p className="mt-1 w-full -translate-y-2 truncate text-center text-[1.7rem] max-sm:text-[1.35rem] ">
          Class of 2024
        </p>
      </div>

      <div className=" relative mb-10 flex w-full flex-1 items-center">
        <div className="relative w-full  py-2 ">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 via-white/80 to-white/20 blur-xl"></div>

          <div className="px-30 relative w-full max-sm:px-4">
            <input
              id="name"
              type="text"
              autoComplete="off"
              placeholder="Xin hỏi cao danh quý tánh?"
              className="w-full bg-transparent py-4 text-center font-playball text-[1.3rem] text-text outline-none placeholder:text-text/70"
            />
          </div>
        </div>
      </div>

      <p className="relative rounded-full px-6 py-1 font-abril-fatface text-[1.5rem] text-text">
        <span className="absolute -inset-1 rounded-full  bg-gradient-to-r from-white/0 via-primary/100 to-white/0 blur-xl"></span>
        <span className="relative">You are invited</span>
      </p>
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

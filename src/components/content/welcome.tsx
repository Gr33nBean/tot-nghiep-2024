const Welcome = ({ step }: { step: number }) => {
  return (
    <div className="flex size-full flex-col items-center justify-center px-4 text-center">
      <div className="w-full">
        <p className="w-full truncate text-center font-abril-fatface text-[9dvw] leading-[9dvw] max-md:text-[12dvw] max-md:leading-[12dvw] ">
          Graduation
        </p>
        <p className="mt-1 w-full truncate text-center text-[4dvw] leading-[6dvw] max-md:text-[6dvw] max-md:leading-[8dvw]">
          Class of 2024
        </p>
      </div>

      <p className="my-16 w-full  text-center text-[6dvw] leading-[8dvw] max-md:text-[8dvw] max-md:leading-[10dvw]">
        Bachelor of Software Engineering
      </p>

      <p className="rounded-full bg-primary px-4 py-1 font-abril-fatface text-[4dvw]">You are invited</p>
    </div>
  )
}

export default Welcome

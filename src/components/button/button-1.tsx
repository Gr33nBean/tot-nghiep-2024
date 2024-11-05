const Button1 = ({
  play,
  onClick,
  children1,
  children2,
}: {
  play?: boolean
  onClick?: (e: any) => void
  children1: React.ReactNode
  children2: React.ReactNode
}) => {
  return (
    <button
      data-play={play ? 'true' : 'false'}
      className="group relative size-12 rounded-full border-2 border-secondary text-secondary transition-all duration-200 active:scale-95 data-[play=true]:border-primary data-[play=true]:text-primary"
      onClick={onClick}
    >
      <svg
        className="absolute left-1/2 top-1/2 w-full max-w-6 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-300 group-data-[play=true]:max-w-0 group-data-[play=true]:opacity-0"
        viewBox="0 0 24 24"
        fill="none"
      >
        {children1}
      </svg>

      <svg
        className="absolute left-1/2 top-1/2 w-full max-w-0 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-data-[play=true]:max-w-6 group-data-[play=true]:opacity-100"
        viewBox="0 0 24 24"
        fill="none"
      >
        {children2}
      </svg>
    </button>
  )
}

export default Button1

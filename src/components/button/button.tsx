const Button = ({
  id,
  children,
  className,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  onClick?: (e: any) => void
  id?: string
}) => {
  return (
    <button
      id={id}
      onClick={onClick}
      data-load={false}
      className={`background-glass group flex items-center rounded-full px-4 py-1 font-chonburi text-xl text-text transition-all duration-300 active:scale-75 data-[load=true]:pointer-events-none ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

const SwipeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative size-full min-w-full snap-center snap-always">
      <div className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="relative size-full overflow-y-auto overflow-x-hidden">{children}</div>
    </div>
  )
}

export default SwipeWrapper

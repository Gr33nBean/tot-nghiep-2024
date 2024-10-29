const GradientBorder = ({ rx = 0 }: { rx?: number }) => {
  return (
    <div className="absolute -inset-x-[0.4%] -inset-y-[0.3%] [--primary-color:theme(colors.primary)] [--secondary-color:theme(colors.secondary)]">
      <svg width="100%" height="100%" viewBox="0 0 100% 100%" fill="none">
        <rect
          x="0.5%"
          y="0.5%"
          width="99%"
          height="99%"
          rx={rx}
          stroke="url(#paint0_linear_1169_1346)"
          strokeWidth="3"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1169_1346"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--secondary-color)" />
            <stop offset="0.5" stopColor="var(--primary-color)" />
            <stop offset="1" stopColor="var(--secondary-color)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default GradientBorder

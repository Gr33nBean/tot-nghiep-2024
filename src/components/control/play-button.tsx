export function PlayButton() {
  return (
    <button
      data-play={false}
      className="group relative size-12 rounded-full border-2 border-secondary text-secondary transition-all duration-200 active:scale-95 data-[play=true]:border-primary data-[play=true]:text-primary"
      onClick={(e) => {
        e.currentTarget.dataset.play = e.currentTarget.dataset.play === 'true' ? 'false' : 'true'
      }}
    >
      <svg
        className="absolute left-1/2 top-1/2 w-full max-w-6 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-300 group-data-[play=true]:max-w-0 group-data-[play=true]:opacity-0"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
          fill="currentColor"
        />
        <path
          d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
          fill="currentColor"
        />
      </svg>

      <svg
        className="absolute left-1/2 top-1/2 w-full max-w-0 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-data-[play=true]:max-w-6 group-data-[play=true]:opacity-100"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M17.1628 6.83709C20.3876 9.02928 22 10.1254 22 12.0001C22 13.8748 20.3876 14.9709 17.1628 17.1631C16.2726 17.7682 15.3897 18.338 14.5783 18.8128C13.8665 19.2293 13.0604 19.6602 12.2258 20.0831C9.00859 21.7134 7.39999 22.5286 5.95724 21.6261C4.5145 20.7236 4.38338 18.8342 4.12114 15.0555C4.04698 13.9868 4 12.9392 4 12.0001C4 11.0609 4.04698 10.0133 4.12114 8.9447C4.38338 5.16597 4.5145 3.2766 5.95725 2.37408C7.39999 1.47155 9.00859 2.28672 12.2258 3.91706C13.0604 4.34 13.8665 4.77085 14.5783 5.18738C15.3897 5.66216 16.2726 6.23193 17.1628 6.83709Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}

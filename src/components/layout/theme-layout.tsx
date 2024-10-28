import { setTheme, Themes, TTheme } from '@/utils/local-storage'
import React from 'react'

const ThemeLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = window.location.pathname

  if (pathname !== '/') {
    const theme = pathname.split('/')[1]
    if (theme && Themes.includes(theme)) {
      setTheme(theme as TTheme)
      return <>{children}</>
    }
  } else {
    document.body.className = '!bg-white'
  }
  return (
    <div className="flex size-full flex-col items-center justify-center gap-2 p-4 text-black">
      <p className="bg w-full text-center">Chọn người bạn quen :3</p>
      <div className="flex flex-wrap justify-center gap-2 ">
        {Themes.map((theme) => (
          <a href={`/${theme}`} key={theme} className="w-fit rounded-lg border border-black px-2 py-1 text-center">
            {theme}
          </a>
        ))}
      </div>
    </div>
  )
}

export default ThemeLayout

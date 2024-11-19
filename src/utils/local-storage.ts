export const themeKey = 'theme'
export type TTheme = 'huy' | 'vi' | 'mai' | 'quyen' | 'hen' | 'hieu' | 'thinh' | 'uyen'
export const Themes: TTheme[] = ['huy', 'vi', 'mai', 'quyen', 'hen', 'hieu', 'thinh', 'uyen']

export const Images: Record<TTheme, string> = {
  huy: '/huy.jpg',
  vi: '/huy.jpg',
  mai: '/huy.jpg',
  quyen: '/huy.jpg',
  hen: '/huy.jpg',
  hieu: '/huy.jpg',
  thinh: '/huy.jpg',
  uyen: '/huy.jpg',
}

export const Decors: Record<TTheme, string[]> = {
  huy: ['huy1.png', 'huy2.png'],
  vi: ['huy1.png', 'huy2.png'],
  mai: ['huy1.png', 'huy2.png'],
  quyen: ['huy1.png', 'huy2.png'],
  hen: ['huy1.png', 'huy2.png'],
  hieu: ['huy1.png', 'huy2.png'],
  thinh: ['huy1.png', 'huy2.png'],
  uyen: ['huy1.png', 'huy2.png'],
}

export const getTheme = () => {
  return localStorage.getItem(themeKey) as string
}
export const setTheme = (theme: TTheme) => {
  localStorage.setItem(themeKey, theme)
  document.body.className = theme
}

export const getPhoto = () => {
  const res = JSON.parse(localStorage.getItem('photo') || '{}') as {
    status: string
    name: string
    id: string
    view: string
    link: string
  }

  return res?.id ? res : undefined
}

export const setPhoto = (photo: any) => {
  localStorage.setItem('photo', JSON.stringify(photo))
}

export const resetLocalStorage = () => {
  localStorage.clear()
}

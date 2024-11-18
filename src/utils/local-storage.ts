export const themeKey = 'theme'
export type TTheme = 'huy' | 'vi' | 'mai' | 'quyen' | 'hen' | 'hieu' | 'thinh' | 'uyen'
export const Themes = ['huy', 'vi', 'mai', 'quyen', 'hen', 'hieu', 'thinh', 'uyen']
export const getTheme = () => {
  return localStorage.getItem(themeKey)
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

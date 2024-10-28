export const themeKey = 'theme'
export type TTheme = 'huy' | 'vi' | 'mai' | 'quyen' | 'hen' | 'hieu' | 'thinh' | 'uyen'
export const Themes = ['huy', 'vi', 'mai', 'quyen', 'hen', 'hieu', 'thinh', 'uyen']
export const getTheme = () => {
  return localStorage.getItem(themeKey) as TTheme
}
export const setTheme = (theme: TTheme) => {
  localStorage.setItem(themeKey, theme)
  document.body.className = theme
}

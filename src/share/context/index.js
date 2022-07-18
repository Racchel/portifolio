import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppTheme } from '../../style'

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
   const [theme, setTheme] = useState(AppTheme.dark)
   const [themeName, setThemeName] = useState('dark')

   const navigationListLinks = [
      { title: 'sobre', to: 'about' },
      { title: 'projetos', to: 'projects' },
      { title: 'blog', to: 'blog' }

   ]

   function toggleTheme() {
      theme === AppTheme.light ? setTheme(AppTheme.dark) : setTheme(AppTheme.light)
      themeName === 'light' ? setThemeName('dark') : setThemeName('light')
   }

   return (
      <AppContext.Provider value={{ themeName, toggleTheme, navigationListLinks }}>
         <ThemeProvider theme={theme}>
            {children}
         </ThemeProvider>
      </AppContext.Provider>
   )
}
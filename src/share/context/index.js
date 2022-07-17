import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppTheme } from '../../style'

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
   const [theme, setTheme] = useState(AppTheme.dark)

   function toggleTheme() {
      theme === AppTheme.light ? setTheme(AppTheme.dark) : setTheme(AppTheme.light)
   }

   return (
      <AppContext.Provider value={{ toggleTheme }}>
         <ThemeProvider theme={theme}>
            {children}
         </ThemeProvider>
      </AppContext.Provider>
   )
}
import { createContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppTheme } from '../../style'
import { Data } from '../data'

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
   const [theme, setTheme] = useState(AppTheme.dark)
   const [themeName, setThemeName] = useState('dark')

   const [data, setData] = useState(Data.pt)
   const [language, setLanguage] = useState('pt')

   useEffect(() => {
      switch (language) {
         case 'pt':
            setData(Data.pt)
            break;
         case 'en':
            setData(Data.en)
            break;
         default:
            setData(Data.pt)
      }
      console.log('entrou aqui no useEffect')

   }, [language])


   function toggleTheme() {
      theme === AppTheme.light ? setTheme(AppTheme.dark) : setTheme(AppTheme.light)
      themeName === 'light' ? setThemeName('dark') : setThemeName('light')
   }

   return (
      <AppContext.Provider value={{
         themeName, toggleTheme,
         language, setLanguage,
         navigationListLinks: data.navigationListLinks,
         heroSectionData: data.heroSection,
         infoSectionData: data.infoSection

      }}>
         <ThemeProvider theme={theme}>
            {children}
         </ThemeProvider>
      </AppContext.Provider>
   )
}
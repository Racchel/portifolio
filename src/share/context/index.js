import { createContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppTheme } from '../../style'
import { Data } from '../data'

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
   const [theme, setTheme] = useState(AppTheme.dark)
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

   }, [language])


   function toggleTheme() {
      theme === AppTheme.light ? setTheme(AppTheme.dark) : setTheme(AppTheme.light)
   }

   return (
      <AppContext.Provider value={{
         theme, toggleTheme,
         language, setLanguage,
         navigationListLinks: data.navigationListLinks,
         homeHeroSectionData: data.homeHeroSection,
         blogHeroSectionData: data.blogHeroSection,
         infoSectionData: data.infoSection,
         projectsSectionData: data.projectsSection,
         blogPostsData: data.blogPosts,
         postODSData: data.postODS,
         footerData: data.footer,
         themeName: theme === AppTheme.light ? data.theme.light : data.theme.dark

      }}>
         <ThemeProvider theme={theme}>
            {children}
         </ThemeProvider>
      </AppContext.Provider>
   )
}
import * as S from './style'
import { NavBar, SideBar, ThemeButton, Footer } from '../../components'
import { useEffect, useState } from 'react'

export const Layout = ({ navMenu, children }) => {
   const [isOpen, setIsOpen] = useState(false)

   const toggle = () => {
      setIsOpen(!isOpen)
   }

   useEffect(() => {
      document.documentElement.scrollTop = 0
   }, [])

   return (
      <>
         <S.Container>
            <NavBar toggle={toggle} navMenu={navMenu} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            {children}
         </S.Container>
         <Footer />
         <ThemeButton desktop />
      </>
   )
}
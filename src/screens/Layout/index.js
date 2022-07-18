import * as S from './style'
import { NavBar, SideBar, ThemeButton } from '../../components'
import { useState } from 'react'

export const Layout = ({ title, children }) => {
   const [isOpen, setIsOpen] = useState(false)

   const toggle = () => {
      setIsOpen(!isOpen)
   }

   return (
      <>
         <S.Container>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            {children}
         </S.Container>
         <ThemeButton desktop />
      </>
   )
}
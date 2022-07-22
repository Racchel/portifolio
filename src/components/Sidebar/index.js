import * as S from './style'
import { SidebarMenu } from './SidebarMenu'
import { ThemeButton, SocialMediaSection, LanguageSelector } from '..'

export const SideBar = ({ isOpen, toggle }) => {

   return (

      <S.SideBarContainer isOpen={isOpen} >
         <S.Icon onClick={toggle}>
            <S.CloseIcon />
         </S.Icon>
         <S.SidebarContent>
            <LanguageSelector />
            <SidebarMenu toggle={toggle} />
            <SocialMediaSection bigFont />
            <ThemeButton />
         </S.SidebarContent>
      </S.SideBarContainer>
   )
}
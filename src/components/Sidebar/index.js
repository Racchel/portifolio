import * as S from './style'
import { AppContext } from '../../share'
import { ThemeButton, SocialMediaSection } from '..'

export const SideBar = ({ isOpen, toggle }) => {

   return (
      <AppContext.Consumer>
         {context => (
            <S.SideBarContainer isOpen={isOpen} >
               <S.Icon onClick={toggle}>
                  <S.CloseIcon />
               </S.Icon>
               <S.SidebarWrapper>
                  <S.SidebarMenu>
                     {context.navigationListLinks.map((link, index) => (
                        <S.SidebarLink
                           key={index}
                           to={link.to}
                           onClick={toggle}
                        >{link.title}</S.SidebarLink>
                     ))}
                  </S.SidebarMenu>

                  <SocialMediaSection bigFont />
                  <ThemeButton />
               </S.SidebarWrapper>
            </S.SideBarContainer>
         )}
      </AppContext.Consumer>
   )
}
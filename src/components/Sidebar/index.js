import * as S from './style'
import { AppContext } from '../../share'
import { Button } from '../Button'

export const SideBar = ({ isOpen, toggle }) => {

   return (
      <AppContext.Consumer>
         {context => (
            <S.SideBarContainer isOpen={isOpen} onClick={toggle}>
               <S.Icon onClick={toggle}>
                  <S.CloseIcon />
               </S.Icon>
               <S.SidebarWrapper>
                  <S.SidebarMenu>
                     {context.navigationListLinks.map((link, index) => (
                        <S.SidebarLink key={index} to={link.to}>{link.title}</S.SidebarLink>
                     ))}
                  </S.SidebarMenu>

                  <Button />
               </S.SidebarWrapper>
            </S.SideBarContainer>
         )}
      </AppContext.Consumer>
   )
}